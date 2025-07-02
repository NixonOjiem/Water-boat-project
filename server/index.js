const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");
require("dotenv").config();
const port = process.env.PORT;
const routes = require("./routes"); // Basic routes file
const authRoutes = require("./middleware/auth"); //middleware for authentication

// Database connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection error:", err.message);
    return;
  }
  console.log("✅ MySQL connected");
});

module.exports = connection;

// Configure CORS specifically for your frontend origin
const corsOptions = {
  origin: "http://localhost:5173", // Allow only your frontend origin
  credentials: true, // Allow cookies to be sent
  methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
};

// Use the configured CORS options
app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Water Boat backend running!");
});

app.use("/", routes);
app.use("/auth", authRoutes); // Use the auth middleware for authentication routes

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
