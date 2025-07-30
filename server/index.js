const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql2/promise"); // <--- IMPORTANT: Changed to mysql2/promise
require("dotenv").config();
const port = process.env.PORT || 5000; // Added default port if not in .env
const routes = require("./routes"); // Basic routes file
const authRoutes = require("./middleware/auth"); //middleware for authentication
const apiRoutes = require("./api");

// Database connection
const pool = require("./config/db"); // Import the database connection pool

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
app.use("/api", apiRoutes);
app.use("/auth", authRoutes); // Use the auth middleware for authentication routes

// Error handling middleware (optional, but good practice)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong and broke!");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
