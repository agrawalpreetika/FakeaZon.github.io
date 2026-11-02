import { useCart } from "../context/cart-context"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";

export const PriceComponent = ({ onPlaceOrder, discount = 0, couponCode = null }) => {
    const navigate = useNavigate();
    const { cart } = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);
    const shippingFee = cart.length > 0 ? cart.length * 10 : 0;
    const grandTotal = Math.max(totalPrice + shippingFee - discount, 0);

    return (
        <div className="w-full max-w-[420px] bg-white p-6 rounded-xl shadow-lg h-max mx-auto sm:mx-0 transition-transform duration-200 hover:shadow-xl">
            {/* Title */}
            <h1 className="text-2xl font-semibold text-slate-800 mb-4">Order Summary</h1>

            {/* Cart Info */}
            <div className="flex items-center gap-2 border-b pb-3">
                <ShoppingCartOutlinedIcon className="text-slate-600" />
                <p className="text-sm text-gray-600">{cart.length} item(s) in your cart</p>
            </div>

            {/* Price Breakdown */}
            <div className="flex flex-col gap-3 text-base py-4 border-b">
                <div className="flex justify-between">
                    <p className="text-slate-600">Order Subtotal</p>
                    <p className="font-medium text-slate-800">${totalPrice.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-slate-600">Shipping Fee</p>
                    <p className="font-medium text-slate-800">${shippingFee.toFixed(2)}</p>
                </div>
                {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                        <p>Discount {couponCode ? `(${couponCode})` : ""}</p>
                        <p className="font-medium">-${discount.toFixed(2)}</p>
                    </div>
                )}
            </div>

            {/* Grand Total */}
            <div className="flex justify-between items-center py-4 border-b">
                <p className="text-lg font-semibold text-slate-900">Total</p>
                <p className="text-lg font-bold text-pink-600">${grandTotal.toFixed(2)}</p>
            </div>

            {/* Checkout Button */}
            {
                onPlaceOrder && (
                    <button onClick={() => navigate("/checkout")} className="mt-6 w-full bg-pink-600 text-white py-3 rounded-lg font-medium text-lg shadow-md hover:bg-pink-700 hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 transition-all duration-200">
                        Proceed to Checkout
                    </button>
                )
            }

        </div>
    )
}
