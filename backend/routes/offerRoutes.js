import express from "express";
import {
    getOffers,
    createOffer,
    updateOffer,
    deleteOffer,
    applyOffer,
} from "../controllers/offerController.js";
import { validateBody } from "../middleware/validate.js";

const router = express.Router();

router.get("/", getOffers);
router.post("/", validateBody(["code", "discountValue"]), createOffer);
router.post("/apply", validateBody(["code", "subtotal"]), applyOffer);
router.put("/:id", updateOffer);
router.delete("/:id", deleteOffer);

export default router;
