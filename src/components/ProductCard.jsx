import { useCart } from "../context/cart-context"
import { useWishList } from "../context/wishlist-context"
import { findProductInWishList } from "../utils/findProductInWishlist";
import { findProductInCart } from "../utils/findProductInCart";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate } from "react-router-dom";


export const ProductCard = ({ product }) => {
    const { cart, addToCart } = useCart();
    const { wishList, addToWishList } = useWishList();
    const isInWishList = findProductInWishList(wishList, product._id);
    const isInCart = findProductInCart(cart, product._id);
    const navigate = useNavigate();
    const onCartClick = (product) => {
        if (isInCart) {
            navigate("/cart");
        } else {
            addToCart(product);
        }
    }


    return (

        <div className="group relative my-5 flex w-full  max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <img className="product-img absolute top-0 right-0 h-full w-full object-cover transition-transform duration-300" src={product.image} alt={product.title} />
                {product.isNew && <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>}
                {product.price > product.discountedPrice && <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">{Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF</span>}
                {product.stock < 20 && <span className="absolute bottom-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">Limited Stock</span>}
            </a>
            <div onClick={() => navigate(`/products/${product._id}`)} >
                <div className="mt-4 px-5 pb-5 cursor-pointer">
                    <a>
                        <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
                    </a>
                    <p className="text-sm text-gray-500 mt-1">{product.brand}</p>
                    <div className="flex items-center mt-1">
                        {Array.from({ length: 5 }, (_, index) => (
                            <svg
                                key={index}
                                className={`w-4 h-4 mr-1 ${index < product.rating ? "text-yellow-400" : "text-gray-300"
                                    }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 0 0 .95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 0 0-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 0 0-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.955a1 1 0 0 0-.364-1.118L2.067 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 0 0 .95-.69l1.286-3.955z" />
                            </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
                    </div>

                    <div className="mt-2 mb-2 flex items-center justify-between">
                        <p>
                            <span className="text-2xl font-bold text-slate-900">${product.discountedPrice}</span>
                            <span className="text-sm text-gray-400 line-through ml-2">${product.price}</span>
                        </p>
                    </div>
                    {/* <div className="mt-2 flex flex-wrap gap-2">
                    {product.size.map(s => (
                        <span key={s} className="border px-2 py-1 rounded text-xs text-gray-700">{s}</span>
                    ))}
                </div> */}
                    <p className={`mt-2 text-sm font-medium ${product.stock > 20 ? 'text-green-600' : 'text-red-600'}`}>
                        {product.stock} in stock
                    </p>
                </div>

            </div>
            <div className="px-5 pb-5 flex flex-col gap-2">
                {/* Cart & Wishlist buttons */}
                {/* Add to Cart */} <button onClick={() => onCartClick(product)} className="flex mt-4 w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-md font-medium text-white shadow-md transition-all duration-200 hover:cursor-pointer hover:bg-slate-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400" > {isInCart ? <ShoppingCartCheckoutIcon /> : <AddShoppingCartIcon />} {isInCart ? "Go to Cart" : "Add to Cart"} </button>
                {/* Add to Wishlist */} <button onClick={() => !isInWishList && addToWishList(product)} disabled={isInWishList} className="flex mt-4 w-full justify-center items-center gap-2 rounded-lg bg-pink-600 px-5 py-2.5 text-md font-medium text-white shadow-md transition-all duration-200 hover:cursor-pointer hover:bg-pink-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-pink-600 disabled:hover:scale-100" > <FavoriteBorderIcon /> {isInWishList ? "In Wishlist" : "Add to Wishlist"} </button>
            </div>
        </div>


    )
}