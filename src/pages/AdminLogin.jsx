import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { loginUser } from "../api/backendApi";
import { setAdminAuth } from "../utils/adminAuth";
import { ShieldCheck } from "lucide-react";

// Separate from the main site's customer login (Platzi-based) — this logs
// into our own backend and is what gates /admin/products (Experiments 6/7).
export const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const { token, user } = await loginUser(email, password);
            setAdminAuth({ token, role: user.role, name: user.name, email: user.email });
            navigate("/admin/products");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-100 mt-14 flex items-center justify-center px-4">
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-8 w-full max-w-sm space-y-4">
                    <h1 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                        <ShieldCheck className="w-6 h-6 text-pink-600" /> Admin Login
                    </h1>
                    {error && <p className="text-red-600 text-sm text-center">{error}</p>}
                    <input
                        type="email" required placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:border-pink-600"
                    />
                    <input
                        type="password" required placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:border-pink-600"
                    />
                    <button
                        type="submit" disabled={loading}
                        className="w-full bg-pink-600 disabled:bg-slate-400 text-white py-3 rounded-lg hover:bg-pink-700 transition"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </main>
        </>
    );
};
