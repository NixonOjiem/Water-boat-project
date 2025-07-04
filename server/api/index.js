// ./api/index.js
const express = require("express");
const router = express.Router();
const pool = require("../config/db"); // Adjust path as needed to reach your db.js

// Route to handle booking submissions
router.post("/bookings", async (req, res) => {
  try {
    // Destructure userId from req.body as well
    const { destination, date, time, passengers, userId } = req.body;

    // Basic server-side validation
    if (!destination || !date || !time || !passengers || !userId) {
      // Added userId to validation
      return res
        .status(400)
        .json({
          message: "All booking fields (including userId) are required.",
        });
    }

    // Validate passengers count (should be within your frontend's maxPassengers)
    if (passengers < 1 || passengers > 20) {
      return res
        .status(400)
        .json({ message: "Number of passengers must be between 1 and 20." });
    }

    // Insert booking into the database, including userId
    const [result] = await pool.execute(
      "INSERT INTO bookings (userId, destination, booking_date, booking_time, passengers) VALUES (?, ?, ?, ?, ?)",
      [userId, destination, date, time, passengers] // Ensure order matches columns
    );

    res.status(201).json({
      message: "Booking created successfully!",
      bookingId: result.insertId,
      data: {
        userId, // Include userId in response
        destination,
        date,
        time,
        passengers,
      },
    });
  } catch (error) {
    console.error("Error processing booking:", error);
    if (error.code === "ER_DUP_ENTRY") {
      res.status(409).json({
        message:
          "A booking for this exact time and destination already exists.",
        error: error.message,
      });
    } else {
      res.status(500).json({
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
