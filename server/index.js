import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import warehouseRoutes from './warehouse/routes/warehouseRoutes.js'

// load environment variables
dotenv.config();

const app = express();
const URL = process.env.MONGOURL;

// Middleware
app.use(cors());
app.use(express.json());




// MongoDB connection
mongoose
  .connect(URL)
  .then(() => console.log("Connected to MongoDB🍃"))
  .catch((error) => console.error("Failed to connect to MongoDB:", error));

// Global Error Handler
app.use((err, res, req, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

app.use('/WarehouseRoutes', warehouseRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

