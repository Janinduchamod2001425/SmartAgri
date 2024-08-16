import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// load environment variables
dotenv.config();

const app = express();
const URL = process.env.MONGOURL;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// MongoDB connection
mongoose
  .connect(URL)
  .then(() => console.log("Connected to MongoDB🍃"))
  .catch((error) => console.error("Failed to connect to MongoDB:", error));

// Global Error Handler

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
