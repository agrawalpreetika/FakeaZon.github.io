import mongoose from "mongoose";

// Backend cart (Experiment 10). One cart doc per logged-in user — items are
// a snapshot (title/price copied in), same pattern as Order.items.
const cartItemSchema = new mongoose.Schema(
    {
        productId: { type: String, required: true },
        title: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number, required: true, min: 1, default: 1 },
        image: { type: String, default: "" },
    },
    { _id: false }
);

const cartSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
        items: { type: [cartItemSchema], default: [] },
    },
    { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
