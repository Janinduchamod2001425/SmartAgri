import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
// Database connection - Calls the function responsible for connecting to the database.
connectDB();

const port = process.env.PORT || 5000; // Port Configuration

const app = express(); // Creating an Express App

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Default Route
app.get("/", (req, res) => res.send("Server is ready"));

// Routes
app.use("/api/users", userRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

// Server Initialization
app.listen(port, () => console.log(`Server listening on ${port}`));
