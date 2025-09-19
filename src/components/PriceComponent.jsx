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

import { useCart } from "../context/cart-context"

export const PriceComponent = () => {
    const { cart } = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);
    const shippingFee = cart.length * 10;
    const grandTotal = totalPrice + shippingFee;

    return (
        <div className="w-full max-w-[400px] bg-white p-5 rounded-md shadow-md h-max mx-auto sm:mx-0">
            <h1 className="text-2xl font-bold">Order Summary</h1>
            <div className="flex flex-col gap-4 text-lg py-4 border-y">
                <div className="flex">
                    <p>Price ({cart.length} items):</p>
                    <p className="ml-auto">${totalPrice}</p>
                </div>
                <div className="flex">
                    <p>Shipping fee:</p>
                    <p className="ml-auto">${shippingFee}</p>
                </div>
            </div>
            <div className="flex font-semibold text-lg py-4 border-b">
                <p>Total:</p>
                <p className="ml-auto">${grandTotal}</p>
            </div>
            <button className="mt-4 text-lg w-full bg-pink-600 text-white py-2 rounded-md hover:bg-slate-600 transition-colors duration-200">
                CHECKOUT
            </button>
        </div>
    )
}
