// ./api/index.js
const express = require("express");
const router = express.Router();
const pool = require("../config/db"); // Adjust path as needed to reach your db.js

// Route to handle booking submissions
// Route to handle booking submissions
router.post("/bookings", async (req, res) => {
  try {
    // Updated parameters
    const { duration, date, time, passengers, userId } = req.body;

    // Authentication check
    if (
      !userId ||
      userId === "null" ||
      userId === "undefined" ||
      userId === "guest"
    ) {
      return res.status(401).json({
        message: "Authentication required. Please log in to book a trip.",
        error: "UNAUTHENTICATED",
      });
    }

    // Validation
    if (!duration || !date || !time || !passengers || !userId) {
      return res.status(400).json({
        message: "All booking fields are required.",
      });
    }

    // Validate inputs
    if (passengers < 1 || passengers > 20) {
      return res.status(400).json({
        message: "Number of passengers must be between 1 and 20.",
      });
    }

    if (duration < 1 || duration > 8) {
      return res.status(400).json({
        message: "Duration must be between 1-8 hours.",
      });
    }

    // Pricing configuration (move to config file in production)
    const BASE_PRICE = 3000;
    const PRICE_PER_HOUR = 1500;
    const PRICE_PER_PASSENGER = 200;

    // Calculate total price
    const totalPrice =
      BASE_PRICE +
      PRICE_PER_HOUR * duration +
      PRICE_PER_PASSENGER * passengers * duration;

    // Insert booking
    const [result] = await pool.execute(
      `INSERT INTO bookings 
        (userId, booking_date, booking_time, passengers, duration, total_price) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [userId, date, time, passengers, duration, totalPrice]
    );

    res.status(201).json({
      message: "Booking created successfully!",
      bookingId: result.insertId,
      data: {
        userId,
        duration,
        date,
        time,
        passengers,
        totalPrice,
      },
    });
  } catch (error) {
    console.error("Error processing booking:", error);
    res.status(500).json({
      message: "Internal server error. Failed to save booking.",
      error: error.message,
    });
  }
});

/**
 * @route   GET /api/bookings/user/:userId
 * @desc    Get all bookings for a specific user
 * @access  Private (assuming you have auth middleware)
 */
router.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }

    // Updated query to match new booking structure
    const [bookings] = await pool.execute(
      `SELECT
          id AS booking_id,
          booking_date,
          passengers,
          booking_time,
          duration,
          total_price,
          created_at,
          updated_at
        FROM bookings
        WHERE userId = ?
        ORDER BY booking_date DESC, booking_time DESC`,
      [userId]
    );

    if (bookings.length === 0) {
      return res.status(200).json([]);
    }

    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    res.status(500).json({
      message: "Failed to fetch user bookings.",
      error: error.message,
    });
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
