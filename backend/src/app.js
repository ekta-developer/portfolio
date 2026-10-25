import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import pool from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio backend is running.",
  });
});

app.use("/api/contacts", contactRoutes);

const startServer = async () => {
  try {
    await pool.query("SELECT 1");
    console.log("PostgreSQL connected successfully.");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

startServer();