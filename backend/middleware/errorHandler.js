// Centralized error-handling middleware. Any controller that calls
// next(error) ends up here instead of crashing the process or leaking a
// raw stack trace to the client.
export const errorHandler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
    console.error(err);

    if (err.name === "CastError") {
        return res.status(400).json({ message: `Invalid id: ${err.value}` });
    }
    if (err.name === "ValidationError") {
        return res.status(400).json({ message: err.message });
    }

    res.status(err.status || 500).json({ message: err.message || "Internal server error" });
};

// 404 handler for unknown routes.
export const notFound = (req, res) => {
    res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });
};
