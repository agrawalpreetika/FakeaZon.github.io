import jwt from "jsonwebtoken";

// Reads "Authorization: Bearer <token>", verifies it, and attaches the
// decoded { userId, role } to req.user (Experiment 7: JWT sessions).
export const protect = (req, res, next) => {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : null;

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

// Must run after protect() so req.user is populated.
// (Experiment 6: RBAC — admin-only routes.)
export const adminOnly = (req, res, next) => {
    if (req.user?.role !== "admin") {
        return res.status(403).json({ message: "Admin access required" });
    }
    next();
};
