import mongoose from "mongoose";

// Product Catalog model (Experiment 3). Holds the products our *own* backend
// owns — separate from the DummyJSON-sourced catalog customers browse, this
// is what the Admin Products screen performs CRUD against.
const productSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        description: { type: String, default: "" },
        price: { type: Number, required: true, min: 0 },
        category: { type: String, required: true, trim: true },
        stock: { type: Number, required: true, min: 0, default: 0 },
        image: { type: String, default: "" },
        brand: { type: String, default: "Generic" },
    },
    { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
