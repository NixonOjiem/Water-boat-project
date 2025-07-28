// db connection configuration

const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: 3306,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test connection on startup
pool
  .getConnection()
  .then((connection) => {
    console.log("✅ MySQL connected");
    connection.release();
  })
  .catch((err) => {
    console.error("❌ MySQL connection error:", err);
    process.exit(1);
  });

module.exports = pool;
