import { Order } from "../models/Order.js";

// POST /api/orders — create an order from the cart + shipping info.
// Required fields are checked by validateBody middleware.
export const createOrder = async (req, res, next) => {
    try {
        const { items, customer, subtotal, shippingFee, offerCode, discount, total } = req.body;

        const order = await Order.create({
            items,
            customer,
            subtotal,
            shippingFee: shippingFee || 0,
            offerCode: offerCode || null,
            discount: discount || 0,
            total,
        });

        res.status(201).json({ message: "Order placed successfully", data: order });
    } catch (error) {
        next(error);
    }
};

// GET /api/orders?email=...  — order history. Without ?email, returns all
// orders (used by the admin side); with it, scoped to one customer.
export const getOrders = async (req, res, next) => {
    try {
        const filter = req.query.email ? { "customer.email": req.query.email } : {};
        const orders = await Order.find(filter).sort({ createdAt: -1 });
        res.json({ data: orders });
    } catch (error) {
        next(error);
    }
};

// GET /api/orders/:id
export const getOrderById = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: "Order not found" });
        res.json({ data: order });
    } catch (error) {
        next(error);
    }
};
