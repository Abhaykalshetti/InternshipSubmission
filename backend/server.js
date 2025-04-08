import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/login.routes.js";
import createUser from "./methods/CreateUser.js";
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", authRoutes);
// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
