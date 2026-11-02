import mongoose from "mongoose";

// Minimal User model (Experiment 5: REST API demo). Full auth stays on the
// external Platzi API for now — this is just our own backend's user record,
// with a role field ready for RBAC in Experiment 6.
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["customer", "admin", "vendor"], default: "customer" },
    },
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
