import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PriceComponent } from "../components/PriceComponent";
import { useCart } from "../context/cart-context";
import { CheckoutForm } from "../components/CheckoutForm";
import { OrderConfirmModal } from "../components/OrderConfirmModal";
import { SuccessModal } from "../components/SuccessModal";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Tag } from "lucide-react";
import { applyCoupon, placeOrder } from "../api/backendApi";

export const Checkout = () => {
    const { cart, clearCart } = useCart();
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", address: "" });
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [placedOrderId, setPlacedOrderId] = useState(null);
    const navigate = useNavigate();

    // Coupon / offer state (Experiment 3: offer-discount calculation logic)
    const [couponInput, setCouponInput] = useState("");
    const [coupon, setCoupon] = useState(null); // { code, discount, message }
    const [couponError, setCouponError] = useState("");
    const [applyingCoupon, setApplyingCoupon] = useState(false);

    // Order placement state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [orderError, setOrderError] = useState("");

    const subtotal = cart.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0);
    const shippingFee = cart.length > 0 ? cart.length * 10 : 0;
    const discount = coupon?.discount || 0;
    const grandTotal = Math.max(subtotal + shippingFee - discount, 0);
    const isFormValid = formData.name && formData.phone && formData.address;

    const handleApplyCoupon = async () => {
        if (!couponInput.trim()) return;
        setApplyingCoupon(true);
        setCouponError("");
        try {
            const result = await applyCoupon(couponInput.trim(), subtotal);
            setCoupon(result);
        } catch (err) {
            setCoupon(null);
            setCouponError(err.message);
        } finally {
            setApplyingCoupon(false);
        }
    };

    const handleRemoveCoupon = () => {
        setCoupon(null);
        setCouponInput("");
        setCouponError("");
    };

    const handleConfirmOrder = async () => {
        setIsSubmitting(true);
        setOrderError("");
        try {
            const { data } = await placeOrder({
                items: cart.map((item) => ({
                    productId: item._id,
                    title: item.title,
                    price: item.discountedPrice,
                    quantity: item.quantity,
                    image: item.image,
                })),
                customer: {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address,
                },
                subtotal,
                shippingFee,
                offerCode: coupon?.code || null,
                discount,
                total: grandTotal,
            });
            clearCart();
            setPlacedOrderId(data._id);
            setIsConfirmModalOpen(false);
            setIsSuccessModalOpen(true);
        } catch (err) {
            setOrderError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen py-10 bg-gray-100 mt-14">
                <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>

                <div className="p-4 flex flex-col lg:flex-row  gap-8  items-center lg:items-start justify-center">
                    {/* Left Side: Form */}
                    <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow space-y-6">
                        {/* Back to Cart */}
                        <div onClick={() => navigate('/cart')} className="flex items-center gap-2 mb-4 cursor-pointer hover:text-pink-600 transition">
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back to Cart / Edit Order</span>
                        </div>
                        <h2 className="text-xl font-semibold mb-4">Billing & Shipping Info</h2>
                        <CheckoutForm formData={formData} setFormData={setFormData} />

                        {/* Coupon / Offer */}
                        <div className="border-t pt-6">
                            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                <Tag className="w-5 h-5 text-pink-600" /> Have a coupon?
                            </h2>
                            {coupon ? (
                                <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                                    <span className="text-green-700 font-medium">{coupon.message}</span>
                                    <button onClick={handleRemoveCoupon} className="text-sm text-gray-500 hover:text-red-600 underline">
                                        Remove
                                    </button>
                                </div>
                            ) : (
                                <div className="flex gap-2">
                                    <input
                                        value={couponInput}
                                        onChange={(e) => setCouponInput(e.target.value)}
                                        placeholder="Enter coupon code (e.g. WELCOME10)"
                                        className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-pink-600 focus:ring-1 focus:ring-pink-600 transition uppercase"
                                    />
                                    <button
                                        onClick={handleApplyCoupon}
                                        disabled={applyingCoupon}
                                        className="bg-slate-800 disabled:bg-slate-400 text-white px-5 py-2 rounded-lg hover:bg-slate-700 transition"
                                    >
                                        {applyingCoupon ? "Checking..." : "Apply"}
                                    </button>
                                </div>
                            )}
                            {couponError && <p className="text-red-600 text-sm mt-2">{couponError}</p>}
                        </div>

                        <button
                            onClick={() => setIsConfirmModalOpen(true)}
                            className="bg-pink-600  disabled:bg-slate-500 text-white px-6 py-2 rounded hover:bg-pink-700 transition w-full"
                            disabled={!isFormValid}
                        >
                            Place Order
                        </button>
                    </div>

                    {/* Right Side: Price Component */}
                    <div className="w-full flex flex-col items-center lg:w-96">
                        <PriceComponent onPlaceOrder={false} discount={discount} couponCode={coupon?.code} />
                        <div className="w-full max-w-[420px] mt-4 bg-white p-4 rounded-lg shadow space-y-2">
                            <h3 className="font-semibold">Order Summary</h3>
                            {cart.map((item) => (
                                <div key={item._id} className="flex justify-between">
                                    <span>{item.title} x {item.quantity}</span>
                                    <span>${(item.discountedPrice * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Modals */}
            <OrderConfirmModal
                isOpen={isConfirmModalOpen}
                onClose={() => setIsConfirmModalOpen(false)}
                cart={cart}
                formData={formData}
                subtotal={subtotal}
                shippingFee={shippingFee}
                discount={discount}
                couponCode={coupon?.code}
                total={grandTotal}
                onConfirm={handleConfirmOrder}
                isSubmitting={isSubmitting}
                error={orderError}
            />

            <SuccessModal
                isOpen={isSuccessModalOpen}
                onClose={() => setIsSuccessModalOpen(false)}
                orderId={placedOrderId}
            />

            <Footer />
        </>
    );
};
