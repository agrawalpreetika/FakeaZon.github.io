import mongoose from "mongoose";

// Order model (Experiment 3). Captures a snapshot of the cart at checkout
// time (price/title copied in, not just referenced) so order history stays
// accurate even if a product's price changes later.
const orderItemSchema = new mongoose.Schema(
    {
        productId: { type: String, required: true }, // string: cart items come from the DummyJSON-backed catalog, not our own Product collection
        title: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true, min: 1 },
        image: { type: String, default: "" },
    },
    { _id: false }
);

const orderSchema = new mongoose.Schema(
    {
        items: { type: [orderItemSchema], required: true, validate: (v) => v.length > 0 },
        customer: {
            name: { type: String, required: true },
            email: { type: String, default: "" },
            phone: { type: String, required: true },
            address: { type: String, required: true },
        },
        subtotal: { type: Number, required: true, min: 0 },
        shippingFee: { type: Number, required: true, min: 0, default: 0 },
        offerCode: { type: String, default: null },
        discount: { type: Number, required: true, min: 0, default: 0 },
        total: { type: Number, required: true, min: 0 },
        status: {
            type: String,
            enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
            default: "pending",
        },
    },
    { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
