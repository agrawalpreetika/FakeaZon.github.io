import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

// GET /api/users
export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find().select("-password");
        res.json({ data: users });
    } catch (error) {
        next(error);
    }
};

// GET /api/users/:id
export const getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json({ data: user });
    } catch (error) {
        next(error);
    }
};

// POST /api/users — required fields checked by validateBody middleware
export const createUser = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;

        const existing = await User.findOne({ email: email.toLowerCase() });
        if (existing) return res.status(409).json({ message: "A user with this email already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword, role });

        const { password: _omit, ...userWithoutPassword } = user.toObject();
        res.status(201).json({ message: "User created", data: userWithoutPassword });
    } catch (error) {
        next(error);
    }
};

// POST /api/users/login — Experiment 7 (JWT session). Required fields
// checked by validateBody middleware.
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) return res.status(401).json({ message: "Invalid email or password" });

        const passwordMatches = await bcrypt.compare(password, user.password);
        if (!passwordMatches) return res.status(401).json({ message: "Invalid email or password" });

        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        res.json({
            message: "Login successful",
            token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role },
        });
    } catch (error) {
        next(error);
    }
};
