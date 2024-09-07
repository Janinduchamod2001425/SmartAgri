import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import fertilizerRoutes from "./fertilizer_recommender/routes/fertilizerRoutes.js";

// load environment variables
dotenv.config();

const app = express();

app.use(bodyParser.json());
const URL = process.env.MONGOURL;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api",fertilizerRoutes)

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

//app.use("/api", route);
