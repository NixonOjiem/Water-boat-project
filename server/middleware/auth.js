// middleware/auth.js OR routes/auth.js
const express = require("express");
const router = express.Router(); // <--- CRUCIAL: Create a new router instance
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Assuming 'connection' is imported or available here, or pass it via dependency injection if needed
const connection = require("../index"); // If you want to use the connection from server.js

// Example: Login route
router.post("/login", async (req, res) => {
  // Implement your login logic here
  const { email, password } = req.body;
  try {
    // Fetch user from DB using 'connection'
    // Compare password with bcrypt.compare
    // Generate JWT token
    res
      .status(200)
      .json({ message: "Login successful", token: "your_jwt_token" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

// Example: Registration route
router.post("/register", async (req, res) => {
  // Implement your registration logic here
  const { name, email, password } = req.body;
  try {
    // Hash password with bcrypt.hash
    // Insert user into DB using 'connection'
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
});

// If you have a middleware function that authenticates tokens
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401); // No token

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token
    req.user = user;
    next();
  });
};

// You can also export this middleware separately if needed
module.exports.authenticateToken = authenticateToken;

module.exports = router;
