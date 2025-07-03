// routes/index.js (or routes.js if that's the name)
const express = require("express");
const router = express.Router(); // Create a new router instance

// Define your basic routes here
router.get("/status", (req, res) => {
  res.json({ status: "OK", message: "API is healthy" });
});

router.get("/ping", (req, res) => {
  res.send("Pong!");
});

// Add other non-auth related routes here

module.exports = router; // Export the router instance
