// middleware/auth.js OR routes/auth.js
const express = require("express");
const router = express.Router(); // <--- CRUCIAL: Create a new router instance
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Assuming 'connection' is imported or available here, or pass it via dependency injection if needed
const connection = require("../config/db"); // If you want to use the connection from server.js
const JWT_SECRET = process.env.JWT_SECRET; // Loads JWT secret from environment variables
const { OAuth2Client } = require("google-auth-library");
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

// Manual Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Basic input validation
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  try {
    // 1. Fetch user from DB using 'connection'
    // Assuming 'connection' is a promise-based MySQL connection or similar
    const [rows] = await connection.execute(
      // Updated to select 'password_hash' instead of 'password'
      "SELECT id, email, password_hash FROM users WHERE email = ?",
      [email]
    );

    const user = rows[0];

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid credentials (email not found)." });
    }

    // 2. Compare password with bcrypt.compare
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Invalid credentials (incorrect password)." });
    }

    // 3. Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Send success response with token
    res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    console.error("Login error:", error);
    // Differentiate between database errors and other server errors if needed
    res.status(500).json({ message: "Server error during login." });
  }
});

// Example: Registration route
router.post("/register", async (req, res) => {
  // Implement your registration logic here
  const { username, email, phone, password } = req.body; // Assuming 'username' and 'phone' are also part of the request body

  // Basic input validation
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Username, email, and password are required." });
  }

  try {
    // Check if user with email or username already exists
    const [existingUsers] = await connection.execute(
      "SELECT id FROM users WHERE email = ? OR username = ?",
      [email, username]
    );

    if (existingUsers.length > 0) {
      return res
        .status(409)
        .json({ message: "User with that email or username already exists." });
    }

    // Hash password with bcrypt.hash
    const salt = await bcrypt.genSalt(10); // Generate a salt with 10 rounds
    const password_hash = await bcrypt.hash(password, salt);

    // Insert user into DB using 'connection'
    const [result] = await connection.execute(
      "INSERT INTO users (username, email, phone, password_hash, auth_provider) VALUES (?, ?, ?, ?, ?)",
      [username, email, phone || null, password_hash, "manual"] // 'phone' can be null, 'auth_provider' is 'manual'
    );

    // Check if the insertion was successful
    if (result.affectedRows === 1) {
      res.status(201).json({
        message: "User registered successfully",
        userId: result.insertId,
      });
    } else {
      res.status(500).json({ message: "Failed to register user." });
    }
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error during registration." });
  }
});

// Signup/Login with Google
router.post("/google", async (req, res) => {
  const { token: idToken } = req.body;

  if (!idToken) {
    return res.status(400).json({ message: "Google ID token is required." });
  }

  try {
    // Verify Google ID token
    const ticket = await client.verifyIdToken({
      idToken,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const {
      sub: google_id,
      name: username,
      email,
      // picture: image_url, // Removed as per your schema
    } = payload;

    // 1. Check if user exists by google_id OR email
    const [existingUsers] = await connection.execute(
      // Changed from pool.execute to connection.execute
      "SELECT id, username, email, google_id, auth_provider FROM users WHERE google_id = ? OR email = ?",
      [google_id, email]
    );

    let user = existingUsers[0];

    // 2. Handle user creation/update
    if (!user) {
      // Create new user with Google data
      const [result] = await connection.execute(
        // Changed from pool.execute to connection.execute
        "INSERT INTO users (email, username, google_id, auth_provider) VALUES (?, ?, ?, ?)", // Removed image_url, is_verified
        [email, username, google_id, "google"]
      );

      // Fetch newly created user
      const [newUsers] = await connection.execute(
        // Changed from pool.execute to connection.execute
        "SELECT id, username, email, google_id, auth_provider FROM users WHERE id = ?", // Removed image_url, is_verified
        [result.insertId]
      );
      user = newUsers[0];
    } else {
      // Update existing user with Google credentials if google_id is missing
      if (!user.google_id) {
        // Removed image_url check as it's not in schema
        await connection.execute(
          // Changed from pool.execute to connection.execute
          "UPDATE users SET google_id = ?, auth_provider = ? WHERE id = ?", // Removed image_url, is_verified
          [google_id, "google", user.id]
        );

        // Refresh user data
        const [updatedUsers] = await connection.execute(
          // Changed from pool.execute to connection.execute
          "SELECT id, username, email, google_id, auth_provider FROM users WHERE id = ?", // Removed image_url, is_verified
          [user.id]
        );
        user = updatedUsers[0];
      }
    }

    // 3. Generate JWT token (using existing JWT_SECRET)
    const appToken = jwt.sign(
      // Changed from generateAppToken to jwt.sign
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Google authentication successful",
      token: appToken,
      user: {
        id: user.id,
        name: user.username,
        email: user.email,
        // image: user.image_url, // Removed as per your schema
      },
    });
  } catch (error) {
    console.error("Google authentication error:", error);
    res.status(401).json({
      message: "Google authentication failed",
      error: error.message,
    });
  }
});

// If you have a middleware function that authenticates tokens
// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (token == null) return res.sendStatus(401); // No token

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403); // Invalid token
//     req.user = user;
//     next();
//   });
// };

// // You can also export this middleware separately if needed
// module.exports.authenticateToken = authenticateToken;

module.exports = router;
