import mongoose from "mongoose";

// Discount/Offer model (Experiment 3). A coupon code customers can apply at
// checkout. discountType "percentage" takes a 0-100 value off the subtotal;
// "flat" takes a fixed currency amount off.
const offerSchema = new mongoose.Schema(
    {
        code: { type: String, required: true, unique: true, uppercase: true, trim: true },
        description: { type: String, default: "" },
        discountType: { type: String, enum: ["percentage", "flat"], default: "percentage" },
        discountValue: { type: Number, required: true, min: 0 },
        minOrderValue: { type: Number, default: 0, min: 0 },
        expiresAt: { type: Date, default: null },
        active: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export const Offer = mongoose.model("Offer", offerSchema);
