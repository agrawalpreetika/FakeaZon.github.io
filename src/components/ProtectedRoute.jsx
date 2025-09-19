import { Navigate } from "react-router-dom";
import { useLogin } from "../context/login-context";

export const ProtectedRoute = ({ children }) => {
    const { login } = useLogin();

    // Get token from context or localStorage (to survive refresh)
    const token = login.token || localStorage.getItem("access_token");

    if (!token.access_token) {
        // not logged in → redirect to login page
        return <Navigate to="/auth/login" replace />;
    }

    return children;
};
