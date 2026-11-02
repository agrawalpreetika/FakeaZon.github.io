import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import offerRoutes from "./routes/offerRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import { requestLogger } from "./middleware/logger.js";

dotenv.config();

const app = express();

// Middleware
// Allow the local Vite dev server always, plus the deployed frontend URL
// once it exists (Experiment 9).
const allowedOrigins = ["http://localhost:5173", process.env.FRONTEND_URL].filter(Boolean);
app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
    })
);
app.use(express.json());
app.use(requestLogger);

// Home route — sanity check the lab manual asks for
app.get("/", (_req, res) => res.json({ message: "API is running..." }));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/offers", offerRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);

// 404 + error handling
app.use(notFound);
app.use(errorHandler);

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI, { dbName: "fakeazon" })
    .then(() => console.log("MongoDB Connected Successfully!"))
    .catch((err) => console.error("MongoDB Connection Error:", err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
