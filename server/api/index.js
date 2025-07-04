// ./api/index.js
const express = require("express");
const router = express.Router();
const pool = require("../config/db"); // Adjust path as needed to reach your db.js

// Route to handle booking submissions
router.post("/bookings", async (req, res) => {
  try {
    const { destination, date, time, passengers } = req.body;

    // Basic server-side validation
    if (!destination || !date || !time || !passengers) {
      return res
        .status(400)
        .json({ message: "All booking fields are required." });
    }

    // Validate passengers count (should be within your frontend's maxPassengers)
    if (passengers < 1 || passengers > 20) {
      // Assuming your frontend's maxPassengers is 20
      return res
        .status(400)
        .json({ message: "Number of passengers must be between 1 and 20." });
    }

    // Sanitize inputs (optional but recommended for production)
    // For example, if you were directly inserting strings, you might escape them,
    // but mysql2/promise with parameterized queries generally handles this for values.

    // Insert booking into the database
    const [result] = await pool.execute(
      "INSERT INTO bookings (destination, booking_date, booking_time, passengers) VALUES (?, ?, ?, ?)",
      [destination, date, time, passengers]
    );

    res.status(201).json({
      message: "Booking created successfully!",
      bookingId: result.insertId,
      data: {
        destination,
        date,
        time,
        passengers,
      },
    });
  } catch (error) {
    console.error("Error processing booking:", error);
    // More specific error messages could be provided for different types of errors
    if (error.code === "ER_DUP_ENTRY") {
      // Example: If a unique constraint is violated
      res
        .status(409)
        .json({
          message:
            "A booking for this exact time and destination already exists.",
          error: error.message,
        });
    } else {
      res
        .status(500)
        .json({
          message: "Internal server error. Failed to save booking.",
          error: error.message,
        });
    }
  }
});

// Example: A GET route for fetching destinations (if your frontend needs them from the backend)
router.get("/destinations", async (req, res) => {
  try {
    // You might fetch destinations from a database or return a static list
    const [rows] = await pool.execute(
      "SELECT id, name FROM destinations ORDER BY name"
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching destinations:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch destinations.", error: error.message });
  }
});

module.exports = router;
