// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { useCart } from '../context/cart-context';

// export const HorizontalProductCard = ({ product }) => {
//     const { removeFromCart } = useCart();

//     return (
//         <div className='flex w-auto bg-white rounded-md shadow-md '>
//             <img className='w-65 h-55 object-cover rounded-l-md' src={product.images[0]} alt={product.name} />
//             <div className='flex flex-col justify-around p-4 text-xl tracking-tight text-slate-900'>
//                 <div >{product.title}</div>
//                 <div className="flex items-center justify-between">
//                     <p >
//                         <span className="text-2xl mr-2 font-bold text-slate-900">${product.price}</span>
//                         <span className="text-sm text-slate-900 line-through">${product.price + 10}</span>
//                     </p>
//                 </div>
//                 <div className="flex pt-2 pr-2 pb-2 items-center gap-4">
//                     <p>Quantity:</p>
//                     <div>
//                         <button>-</button>
//                         <span>1</span>
//                         <button>+</button>
//                     </div>

//                 </div>
//                 <div className='flex gap-4 pt-4'>
//                     <button className='flex items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-md font-light text-white shadow-md transition-all duration-200 hover:cursor-pointer hover:bg-slate-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400' onClick={() => removeFromCart(product.id)}>
//                         <DeleteOutlineIcon />
//                         Remove from Cart
//                     </button>
//                     <button className="flex justify-center items-center gap-2 rounded-md border-2 border-pink-600 px-4 py-2 text-md font-light text-pink-600 shadow-md transition-all duration-200 hover:cursor-pointer hover:bg-pink-600  hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400">
//                         <FavoriteBorderIcon />
//                         Move to Wishlist
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useCart } from '../context/cart-context';
import { useWishList } from '../context/wishlist-context';
import { findProductInWishList } from '../utils/findProductInWishlist';

export const HorizontalProductCard = ({ product }) => {
    const { removeFromCart, increaseQty, decreaseQty } = useCart();
    const { wishList, addToWishList } = useWishList();
    const isInWishList = findProductInWishList(wishList, product._id);

    return (
        <div className="flex flex-col sm:flex-row w-6/7 sm:w-full bg-white rounded-md shadow-md">
            {/* Product Image */}
            <img

                className=" w-full sm:w-70 h-70 md:w-65 md:h-55 object-cover rounded-t-md md:rounded-l-md md:rounded-tr-none"
                src={product.image}
                alt={product.title}
            />

            {/* Product Details */}
            <div className="flex flex-col justify-around p-4 text-xl tracking-tight text-slate-900 w-full">
                <div>{product.title}</div>
                <p className="text-sm mb-1 text-gray-500">{product.brand}</p>


                <div className="flex items-center justify-between">
                    <p>
                        <span className="text-2xl mr-2 font-bold text-slate-900">${product.discountedPrice}</span>
                        <span className="text-sm text-slate-900 line-through">
                            ${product.price}
                        </span>
                    </p>
                </div>

                <div className="flex pt-2 pr-2 pb-2 items-center gap-4">
                    <p>Quantity:</p>
                    <div className="flex items-center gap-2 border px-2 rounded-md">
                        <button onClick={() => decreaseQty(product._id)}>-</button>
                        <span>{product.quantity}</span>
                        <button onClick={() => increaseQty(product._id)}>+</button>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row gap-4 pt-4">
                    <button
                        className="flex items-center justify-center gap-2 rounded-md bg-slate-900 px-3.5 py-1.5 text-3xs font-light text-white shadow-md transition-all duration-200 hover:cursor-pointer hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                        onClick={() => removeFromCart(product._id)}
                    >
                        <DeleteOutlineIcon />
                        Remove from Cart
                    </button>

                    <button onClick={() => !isInWishList && (addToWishList(product), removeFromCart(product._id))}
                        className="flex items-center justify-center gap-2 rounded-md border-2 border-pink-600 px-3.5 py-1.5 text-3xs font-light text-pink-600 shadow-md transition-all duration-200 hover:cursor-pointer hover:bg-pink-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400">
                        <FavoriteBorderIcon />
                        {isInWishList ? "In Wishlist" : "Move to Wishlist"}
                    </button>
                </div>
            </div>
        </div>
    );
};
