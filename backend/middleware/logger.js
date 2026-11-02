// Logging middleware (Experiment 4). Runs on every request before it
// reaches any route handler.
export const requestLogger = (req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl}`);
    next();
};
