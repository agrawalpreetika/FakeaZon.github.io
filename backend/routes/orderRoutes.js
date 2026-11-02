import express from "express";
import { createOrder, getOrders, getOrderById } from "../controllers/orderController.js";
import { validateBody } from "../middleware/validate.js";

const router = express.Router();

router.post(
    "/",
    validateBody(["items", "customer.name", "customer.phone", "customer.address", "subtotal", "total"]),
    createOrder
);
router.get("/", getOrders);
router.get("/:id", getOrderById);

export default router;
