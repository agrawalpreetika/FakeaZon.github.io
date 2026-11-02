import { Product } from "../models/Product.js";

// GET /api/products
export const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.json({ data: products });
    } catch (error) {
        next(error);
    }
};

// GET /api/products/:id
export const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json({ data: product });
    } catch (error) {
        next(error);
    }
};

// POST /api/products — required fields are checked by validateBody middleware
export const createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ message: "Product created", data: product });
    } catch (error) {
        next(error);
    }
};

// PUT /api/products/:id
export const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json({ message: "Product updated", data: product });
    } catch (error) {
        next(error);
    }
};

// DELETE /api/products/:id
export const deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json({ message: "Product deleted", data: product });
    } catch (error) {
        next(error);
    }
};
