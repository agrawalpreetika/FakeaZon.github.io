// import { useCart } from "../context/cart-context"

// export const PriceComponent = () => {
//     const { cart } = useCart();
//     const totalPrice = cart.reduce((total, item) => total + item.price, 0);
//     const shippingFee = cart.length * 10;
//     const grandTotal = totalPrice + shippingFee;
//     return (
//         <div className="w-[400px] bg-white p-5 rounded-md shadow-md h-max">
//             <h1 className="text-2xl font-bold">Order Summary</h1>
//             <div className="flex flex-col gap-4 text-lg py-4 border-y-1">
//                 <div className="flex">
//                     <p>Price({cart.length} items):</p>
//                     <p className="ml-auto">${totalPrice}</p>
//                 </div>
//                 <div className="flex">
//                     <p>Shipping fee:</p>
//                     <p className="ml-auto">${shippingFee}</p>
//                 </div>

//             </div>
//             <div className="flex font-semibold text-lg py-4 border-b-1">
//                 <p>Total:</p>
//                 <p className="ml-auto">${grandTotal}</p>
//             </div>
//             <button className="mt-4 text-lg w-full bg-pink-600 text-white py-2 rounded-md hover:bg-slate-600 transition-colors duration-200">
//                 CHECKOUT
//             </button>
//         </div>
//     )
// }

// import { useCart } from "../context/cart-context"
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// export const PriceComponent = () => {
//     const { cart } = useCart();
//     const totalPrice = cart.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);
//     const shippingFee = cart.length * 10;
//     const grandTotal = totalPrice + shippingFee;

//     return (
//         <div className="w-full max-w-[400px] bg-white p-5 rounded-md shadow-md h-max mx-auto sm:mx-0">
//             <h1 className="text-2xl font-bold mb-2">Order Summary</h1>
//             <div className="flex items-center border-t-3  gap-2">
//                 <ShoppingCartOutlinedIcon />
//                 <p className="text-sm py-4">{cart.length} items(s)</p>
//             </div>
//             <div className="flex flex-col gap-4 text-lg py-4 border-y">
//                 <div className="flex">
//                     <p>Order Subtotal:</p>
//                     <p className="ml-auto">${totalPrice}</p>
//                 </div>
//                 <div className="flex">
//                     <p>Shipping fee:</p>
//                     <p className="ml-auto">${shippingFee}</p>
//                 </div>
//             </div>
//             <div className="flex font-semibold text-lg py-4 border-b">
//                 <p>Total:</p>
//                 <p className="ml-auto">${grandTotal}</p>
//             </div>
//             <button className="mt-4 text-lg w-full bg-pink-600 text-white py-2 rounded-md hover:bg-slate-600 transition-colors duration-200">
//                 CHECKOUT
//             </button>
//         </div>
//     )
// }


import { useCart } from "../context/cart-context"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";

export const PriceComponent = ({ onPlaceOrder }) => {
    const navigate = useNavigate();
    const { cart } = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);
    const shippingFee = cart.length > 0 ? cart.length * 10 : 0;
    const grandTotal = totalPrice + shippingFee;

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
                    <p className="font-medium text-slate-800">${totalPrice}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-slate-600">Shipping Fee</p>
                    <p className="font-medium text-slate-800">${shippingFee}</p>
                </div>
            </div>

            {/* Grand Total */}
            <div className="flex justify-between items-center py-4 border-b">
                <p className="text-lg font-semibold text-slate-900">Total</p>
                <p className="text-lg font-bold text-pink-600">${grandTotal}</p>
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
