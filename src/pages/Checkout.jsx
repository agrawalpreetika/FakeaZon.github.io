import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PriceComponent } from "../components/PriceComponent";
import { HorizontalProductCard } from "../components/HorizontalProductCard";
import { useCart } from "../context/cart-context";
import { CheckoutForm } from "../components/CheckoutForm";
import { OrderConfirmModal } from "../components/OrderConfirmModal";
import { SuccessModal } from "../components/SuccessModal";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const Checkout = () => {
    const { cart } = useCart();
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", address: "" });
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const navigate = useNavigate();

    const total = cart.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0);
    const isFormValid = formData.name && formData.phone && formData.address;

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
                        <PriceComponent onPlaceOrder={false} />
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
                total={total}
                onConfirm={() => {
                    setIsConfirmModalOpen(false);
                    setIsSuccessModalOpen(true);
                }}
            />

            <SuccessModal
                isOpen={isSuccessModalOpen}
                onClose={() => setIsSuccessModalOpen(false)}
            />

            <Footer />
        </>
    );
};
