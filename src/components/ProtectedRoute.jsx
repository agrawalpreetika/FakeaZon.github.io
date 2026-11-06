import { Navigate } from "react-router-dom";
import { useLogin } from "../context/login-context";

export const ProtectedRoute = ({ children }) => {
    const { login } = useLogin();

    // login-context.jsx already rehydrates `login` from localStorage on load,
    // so login.token is the single source of truth — no separate localStorage
    // read needed here.
    if (!login.token) {
        // not logged in → redirect to login page
        return <Navigate to="/auth/login" replace />;
    }

    return children;
};
