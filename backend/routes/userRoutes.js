import express from "express";
import { getUsers, getUserById, createUser, loginUser } from "../controllers/userController.js";
import { validateBody } from "../middleware/validate.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

router.post("/login", validateBody(["email", "password"]), loginUser);

router.get("/", protect, adminOnly, getUsers);
router.get("/:id", getUserById);
router.post("/", validateBody(["name", "email", "password"]), createUser);

export default router;
