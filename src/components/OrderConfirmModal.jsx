import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { CheckCircle, X } from "lucide-react";

export const OrderConfirmModal = ({
    isOpen,
    onClose,
    cart,
    formData,
    subtotal,
    shippingFee,
    discount,
    couponCode,
    total,
    onConfirm,
    isSubmitting,
    error,
}) => {
    return (
        <Dialog
            open={isOpen}
            onClose={isSubmitting ? () => {} : onClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        >
            <DialogPanel className="bg-white p-6 rounded-2xl shadow-2xl max-h-[98vh] overflow-y-auto w-full max-w-3xl space-y-6 animate-fadeIn">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <DialogTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        Confirm Your Order
                    </DialogTitle>
                    <button
                        onClick={onClose}
                        disabled={isSubmitting}
                        className="p-2 rounded-full hover:bg-gray-100 transition disabled:opacity-40"
                    >
                        <X className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                {/* Shipping Info */}
                <div className="bg-gray-50 p-4 rounded-xl space-y-1 border border-gray-200">
                    <h3 className="font-semibold text-gray-700">📦 Shipping Info</h3>
                    <p className="text-gray-600"><span className="font-medium">Name:</span> {formData.name}</p>
                    <p className="text-gray-600"><span className="font-medium">Phone:</span> {formData.phone}</p>
                    <p className="text-gray-600"><span className="font-medium">Email:</span> {formData.email}</p>
                    <p className="text-gray-600"><span className="font-medium">Address:</span> {formData.address}</p>
                </div>

                {/* Order Items */}
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <h3 className="font-semibold text-gray-700 mb-2">🛍️ Order Items</h3>
                    <ul className="space-y-2 max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300">
                        {cart.map(item => (
                            <li
                                key={item._id}
                                className="flex justify-between items-center border-b pb-2 last:border-none last:pb-0"
                            >
                                <span className="text-gray-700">
                                    {item.title} <span className="text-sm text-gray-500">x {item.quantity}</span>
                                </span>
                                <span className="font-medium text-gray-900">
                                    ${(item.discountedPrice * item.quantity).toFixed(2)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-1 text-sm">
                    <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Shipping</span><span>${shippingFee.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                            <span>Discount {couponCode ? `(${couponCode})` : ""}</span>
                            <span>-${discount.toFixed(2)}</span>
                        </div>
                    )}
                </div>

                {/* Total */}
                <div className="flex justify-between items-center font-bold text-lg text-gray-800">
                    <span>Total:</span>
                    <span className="text-green-600">${total.toFixed(2)}</span>
                </div>

                {error && (
                    <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">{error}</p>
                )}

                {/* Actions */}
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        disabled={isSubmitting}
                        className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition disabled:opacity-40"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={isSubmitting}
                        className="px-5 py-2 rounded-lg bg-green-600 text-white font-medium shadow hover:bg-green-700 transition disabled:opacity-60"
                    >
                        {isSubmitting ? "Placing order..." : "Confirm Order"}
                    </button>
                </div>
            </DialogPanel>
        </Dialog>
    );
};
