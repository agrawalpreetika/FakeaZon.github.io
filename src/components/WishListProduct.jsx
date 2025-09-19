import { useCart } from "../context/cart-context"
import { useWishList } from "../context/wishlist-context"

import { findProductInCart } from "../utils/findProductInCart";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate } from "react-router-dom";


export const WishListProduct = ({ product }) => {
    const { cart, addToCart } = useCart();
    const { wishList, removeFromWishList } = useWishList();

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

        <div className="relative group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" >
                <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={product.image} alt="product image" />
                {/* {product.images[2] && <img className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src={product.images[1]} alt="product image" />} */}
                {/* <div className="absolute  bottom-0 mb-4 flex space-x-4 w-full justify-center">
                <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
                <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
                <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
                </div> */}
                <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
                {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>  */}
            </a>
            <div className="mt-4 px-5 pb-5">
                <a >
                    <h5 className="text-[18px] tracking-tight text-slate-900">{product.title}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-bold text-slate-900">${product.discountedPrice}</span>
                        <span className="text-sm text-slate-900 line-through">${product.price}</span>
                    </p>
                </div>

                {/* Add to Cart */}
                <button
                    onClick={() => onCartClick(product)}
                    className="flex mt-4 w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-md font-medium text-white shadow-md transition-all duration-200 hover:cursor-pointer hover:bg-slate-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                >
                    {
                        isInCart ? <ShoppingCartCheckoutIcon /> : <AddShoppingCartIcon />
                    }
                    {
                        isInCart ? "Go to Cart" : "Add to Cart"
                    }
                </button>

                {/* Remove from Wishlist */}
                <button className='absolute top-3 right-3 rounded-full bg-white p-2 text-black shadow-md transition-colors duration-200 hover:cursor-pointer hover:bg-pink-100 hover:text-pink-600' onClick={() => removeFromWishList(product._id)}>
                    <DeleteOutlineIcon />
                </button>



            </div>
        </div>

    )
}