import { Offer } from "../models/Offer.js";

// GET /api/offers
export const getOffers = async (req, res, next) => {
    try {
        const offers = await Offer.find().sort({ createdAt: -1 });
        res.json({ data: offers });
    } catch (error) {
        next(error);
    }
};

// POST /api/offers — required fields are checked by validateBody middleware
export const createOffer = async (req, res, next) => {
    try {
        const offer = await Offer.create(req.body);
        res.status(201).json({ message: "Offer created", data: offer });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({ message: "An offer with this code already exists" });
        }
        next(error);
    }
};

// PUT /api/offers/:id
export const updateOffer = async (req, res, next) => {
    try {
        const offer = await Offer.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!offer) return res.status(404).json({ message: "Offer not found" });
        res.json({ message: "Offer updated", data: offer });
    } catch (error) {
        next(error);
    }
};

// DELETE /api/offers/:id
export const deleteOffer = async (req, res, next) => {
    try {
        const offer = await Offer.findByIdAndDelete(req.params.id);
        if (!offer) return res.status(404).json({ message: "Offer not found" });
        res.json({ message: "Offer deleted", data: offer });
    } catch (error) {
        next(error);
    }
};

// POST /api/offers/apply  { code, subtotal } -> validates a coupon and
// computes the discount amount. This is the "offer/discount calculation
// logic" step of Experiment 3.
export const applyOffer = async (req, res, next) => {
    try {
        const { code, subtotal } = req.body;
        const offer = await Offer.findOne({ code: String(code).toUpperCase() });
        if (!offer || !offer.active) {
            return res.status(404).json({ valid: false, message: "Invalid or inactive coupon code" });
        }
        if (offer.expiresAt && offer.expiresAt.getTime() < Date.now()) {
            return res.status(400).json({ valid: false, message: "This coupon has expired" });
        }
        if (subtotal < offer.minOrderValue) {
            return res.status(400).json({
                valid: false,
                message: `Minimum order value for this coupon is $${offer.minOrderValue}`,
            });
        }

        const discount =
            offer.discountType === "percentage"
                ? Math.round(subtotal * (offer.discountValue / 100) * 100) / 100
                : Math.min(offer.discountValue, subtotal); // never discount more than the subtotal

        res.json({
            valid: true,
            code: offer.code,
            discountType: offer.discountType,
            discountValue: offer.discountValue,
            discount,
            message: `Coupon applied: -$${discount.toFixed(2)}`,
        });
    } catch (error) {
        next(error);
    }
};
