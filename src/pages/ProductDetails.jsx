import { Navbar } from "../components/Navbar";
import { useCart } from "../context/cart-context";
import { useWishList } from "../context/wishlist-context";
import { findProductInWishList } from "../utils/findProductInWishlist";
import { findProductInCart } from "../utils/findProductInCart";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const { cart, addToCart } = useCart();
    const { wishList, addToWishList } = useWishList();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://fakestoreapiserver.reactbd.org/api/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return (
        <>
            <div className="text-center mt-20 text-lg">Loading product...</div>
            <div className="flex items-center justify-center h-64 w-full">
                <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
        </>
    );

    const isInWishList = findProductInWishList(wishList, product.id || product._id);
    const isInCart = findProductInCart(cart, product.id || product._id);

    const onCartClick = () => {
        if (isInCart) {
            navigate("/cart");
        } else {
            addToCart({ ...product, quantity });
        }
    };

    const handleIncrease = () => {
        if (quantity < product.stock) setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-5 md:px-20 mt-16">
                <div className="bg-white rounded-2xl shadow-2xl  w-full sm:w-5/6 md:w-7/6 flex flex-col md:flex-row gap-10 p-10 hover:shadow-3xl transition-shadow duration-300">

                    {/* Product Image */}
                    <div className="flex lg:w-1/2 justify-center items-start relative">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full max-w-md rounded-xl object-cover hover:scale-102 transition-transform duration-300"
                        />
                        {product.stock < 5 && (
                            <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                Only {product.stock} left!
                            </span>
                        )}
                        {product.isNew && (
                            <span className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                NEW
                            </span>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className=" md:w-1/2 flex flex-col gap-6">
                        <h1 className="text-4xl font-extrabold text-gray-800 hover:text-pink-600 transition-colors duration-200">{product.title}</h1>

                        {/* Rating */}
                        <div className="flex items-center gap-3">
                            <span className="text-yellow-400 text-lg">{'★'.repeat(product.rating)}</span>
                            <span className="text-gray-500">{product.rating} / 5</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-pink-600">${product.discountedPrice}</span>
                            {product.discountedPrice < product.price && (
                                <span className="text-gray-400 line-through text-lg">${product.price}</span>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 text-md leading-relaxed">{product.description}</p>

                        {/* Stock */}
                        <div className={`font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {product.stock > 0 ? `In stock: ${product.stock}` : "Out of stock"}
                        </div>

                        {/* Quantity Selector */}
                        <div className="flex items-center gap-4 mt-2">
                            <span className="font-semibold text-gray-800">Quantity:</span>
                            <div className="flex items-center border rounded-lg overflow-hidden">
                                <button
                                    onClick={handleDecrease}
                                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 transition-colors"
                                >
                                    -
                                </button>
                                <span className="px-4 py-2 w-12 text-center">{quantity}</span>
                                <button
                                    onClick={handleIncrease}
                                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col md:flex-row gap-4 mt-5">
                            <button
                                onClick={onCartClick}
                                className="flex w-full md:w-1/2 items-center justify-center gap-3 rounded-xl bg-slate-900 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-slate-700  transition-all duration-200"
                            >
                                {isInCart ? <ShoppingCartCheckoutIcon /> : <AddShoppingCartIcon />}
                                {isInCart ? "Go to Cart" : "Add to Cart"}
                            </button>

                            <button
                                onClick={() => !isInWishList && addToWishList(product)}
                                disabled={isInWishList}
                                className="flex w-full md:w-1/2 justify-center items-center gap-3 rounded-xl border-2 border-pink-600 px-6 py-3 text-lg font-semibold text-pink-600 shadow-lg hover:bg-pink-600 hover:text-white transition-all duration-200 disabled:opacity-70"
                            >
                                <FavoriteBorderIcon />
                                {isInWishList ? "In Wishlist" : "Add to Wishlist"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
