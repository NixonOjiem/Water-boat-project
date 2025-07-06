// ./api/index.js
const express = require("express");
const router = express.Router();
const pool = require("../config/db"); // Adjust path as needed to reach your db.js

// Route to handle booking submissions
// Route to handle booking submissions
router.post("/bookings", async (req, res) => {
  try {
    // Destructure image from the request body
    const { destination, date, time, passengers, userId, image } = req.body; // Enhanced userId check

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
    } // Basic server-side validation, now including image

    if (!destination || !date || !time || !passengers || !userId || !image) {
      return res.status(400).json({
        message: "All booking fields, including an image, are required.",
      });
    } // Validate passengers count

    if (passengers < 1 || passengers > 20) {
      return res
        .status(400)
        .json({ message: "Number of passengers must be between 1 and 20." });
    } // Insert booking into the database, including the image URL

    const [result] = await pool.execute(
      "INSERT INTO bookings (userId, destination, booking_date, booking_time, passengers, image) VALUES (?, ?, ?, ?, ?, ?)",
      [userId, destination, date, time, passengers, image] // Add image to the array of values
    );

    res.status(201).json({
      message: "Booking created successfully!",
      bookingId: result.insertId,
      data: {
        userId,
        destination,
        date,
        time,
        passengers,
        image, // Include image in the response data
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
    } // Add the 'image' column to your SELECT statement

    const [bookings] = await pool.execute(
      `SELECT
          id AS booking_id,
          booking_date,
          passengers,
          booking_time,
          destination AS destination_name,
          image, 
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
