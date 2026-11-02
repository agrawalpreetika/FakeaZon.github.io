import { Cart } from "../models/Cart.js";

// Totals are computed on the response, not stored (Experiment 10).
const withTotals = (cart) => {
    const items = cart?.items || [];
    const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
    const totalPrice = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    return { _id: cart?._id, userId: cart?.userId, items, totalItems, totalPrice };
};

const getOrCreateCart = async (userId) => {
    let cart = await Cart.findOne({ userId });
    if (!cart) cart = await Cart.create({ userId, items: [] });
    return cart;
};

// GET /api/cart — the logged-in user's cart
export const getCart = async (req, res, next) => {
    try {
        const cart = await getOrCreateCart(req.user.userId);
        res.json({ data: withTotals(cart) });
    } catch (error) {
        next(error);
    }
};

// POST /api/cart/add — add an item, or bump qty if it's already in the cart.
// Required fields checked by validateBody middleware.
export const addToCart = async (req, res, next) => {
    try {
        const { productId, title, price, image } = req.body;
        const qty = Number(req.body.qty) || 1;

        const cart = await getOrCreateCart(req.user.userId);
        const existing = cart.items.find((i) => i.productId === productId);
        if (existing) {
            existing.qty += qty;
        } else {
            cart.items.push({ productId, title, price, qty, image });
        }
        await cart.save();

        res.json({ message: "Item added to cart", data: withTotals(cart) });
    } catch (error) {
        next(error);
    }
};

// PUT /api/cart/update — set an item's quantity. Required fields checked by
// validateBody middleware.
export const updateCartItem = async (req, res, next) => {
    try {
        const { productId, qty } = req.body;
        const cart = await getOrCreateCart(req.user.userId);
        const item = cart.items.find((i) => i.productId === productId);
        if (!item) return res.status(404).json({ message: "Item not in cart" });

        item.qty = Math.max(1, Number(qty));
        await cart.save();

        res.json({ message: "Quantity updated", data: withTotals(cart) });
    } catch (error) {
        next(error);
    }
};

// DELETE /api/cart/remove/:productId
export const removeFromCart = async (req, res, next) => {
    try {
        const cart = await getOrCreateCart(req.user.userId);
        cart.items = cart.items.filter((i) => i.productId !== req.params.productId);
        await cart.save();

        res.json({ message: "Item removed", data: withTotals(cart) });
    } catch (error) {
        next(error);
    }
};

// DELETE /api/cart/clear
export const clearCart = async (req, res, next) => {
    try {
        const cart = await getOrCreateCart(req.user.userId);
        cart.items = [];
        await cart.save();

        res.json({ message: "Cart cleared", data: withTotals(cart) });
    } catch (error) {
        next(error);
    }
};
