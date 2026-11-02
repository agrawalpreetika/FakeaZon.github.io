// Validation middleware (Experiment 4). A small reusable factory instead of
// repeating the same "is this field missing" checks inside every controller.
// Supports dot-paths for nested fields, e.g. "customer.name".
const getValue = (obj, path) => path.split(".").reduce((o, key) => o?.[key], obj);

const isMissing = (value) =>
    value === undefined || value === null || value === "" || (Array.isArray(value) && value.length === 0);

export const validateBody = (requiredFields) => (req, res, next) => {
    const missing = requiredFields.filter((field) => isMissing(getValue(req.body, field)));
    if (missing.length) {
        return res.status(400).json({ message: `Missing required field(s): ${missing.join(", ")}` });
    }
    next();
};
