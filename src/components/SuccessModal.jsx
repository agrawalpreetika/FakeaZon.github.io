import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export const SuccessModal = ({ isOpen, onClose, orderId }) => {
    const navigate = useNavigate();

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        >
            <DialogPanel className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center space-y-6 animate-fadeIn">

                {/* Success Icon */}
                <div className="flex justify-center">
                    <CheckCircle className="w-16 h-16 text-green-600 animate-bounce" />
                </div>

                {/* Title */}
                <DialogTitle className="text-2xl font-bold text-gray-800">
                    🎉 Order Placed Successfully!
                </DialogTitle>

                {/* Message */}
                <p className="text-gray-600">
                    Thank you for your purchase. Your order has been received and is being processed.
                </p>
                {orderId && (
                    <p className="text-sm text-gray-500">
                        Order ID: <span className="font-mono">{orderId.slice(-8)}</span>
                    </p>
                )}

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        onClick={() => {
                            onClose();
                            navigate("/orders");
                        }}
                        className="px-6 py-3 rounded-lg border border-pink-600 text-pink-600 font-medium hover:bg-pink-50 transition"
                    >
                        View My Orders
                    </button>
                    <button
                        onClick={() => {
                            onClose();
                            navigate("/");
                        }}
                        className="px-6 py-3 rounded-lg bg-pink-600 text-white font-medium shadow hover:bg-pink-700 transition"
                    >
                        Go to Homepage
                    </button>
                </div>
            </DialogPanel>
        </Dialog>
    );
};
