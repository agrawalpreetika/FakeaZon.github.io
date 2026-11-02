import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { fetchOrderHistory } from "../api/backendApi";
import { useLogin } from "../context/login-context";
import { Package } from "lucide-react";

// Order history (Experiment 3: "fetch order history"). Scoped by email since
// orders aren't tied to the DummyJSON-based auth user id — the shopper types
// or confirms the email they checked out with.
export const OrderHistory = () => {
    const { login } = useLogin();
    const [email, setEmail] = useState(login?.email || "");
    const [orders, setOrders] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const search = async (e) => {
        e?.preventDefault();
        if (!email) return;
        setLoading(true);
        setError("");
        try {
            const { data } = await fetchOrderHistory(email);
            setOrders(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Auto-search once if we already know the logged-in user's email.
    useEffect(() => {
        if (login?.email) search();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-100 mt-14 py-10 px-4">
                <h1 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
                    <Package className="w-7 h-7 text-pink-600" /> My Orders
                </h1>

                <form onSubmit={search} className="max-w-md mx-auto flex gap-2 mb-10">
                    <input
                        type="email"
                        required
                        placeholder="Enter the email used at checkout"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 border rounded-lg p-3 focus:outline-none focus:border-pink-600"
                    />
                    <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition">
                        {loading ? "..." : "Search"}
                    </button>
                </form>

                {error && (
                    <p className="text-center text-red-600 mb-6">{error}</p>
                )}

                {orders && orders.length === 0 && (
                    <p className="text-center text-gray-500">No orders found for this email.</p>
                )}

                <div className="max-w-3xl mx-auto space-y-6">
                    {orders?.map((order) => (
                        <div key={order._id} className="bg-white rounded-xl shadow p-6">
                            <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                                <div>
                                    <p className="font-semibold text-slate-800">Order #{order._id.slice(-8)}</p>
                                    <p className="text-sm text-gray-500">
                                        {new Date(order.createdAt).toLocaleString()}
                                    </p>
                                </div>
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-700 capitalize">
                                    {order.status}
                                </span>
                            </div>

                            <ul className="divide-y">
                                {order.items.map((item, i) => (
                                    <li key={i} className="py-2 flex justify-between text-sm">
                                        <span>{item.title} × {item.quantity}</span>
                                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="border-t mt-3 pt-3 space-y-1 text-sm">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span><span>${order.subtotal.toFixed(2)}</span>
                                </div>
                                {order.discount > 0 && (
                                    <div className="flex justify-between text-green-600">
                                        <span>Discount {order.offerCode ? `(${order.offerCode})` : ""}</span>
                                        <span>-${order.discount.toFixed(2)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span><span>${order.shippingFee.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between font-bold text-slate-900 text-base pt-1">
                                    <span>Total</span><span>${order.total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};
