import { Navbar } from "../components/Navbar"
import { useCart } from "../context/cart-context"
import { HorizontalProductCard } from "../components/HorizontalProductCard";
import { PriceComponent } from "../components/PriceComponent";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";


export const Cart = () => {
    const { cart } = useCart();
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <main className="min-h-screen h-max py-10 bg-gray-100 mt-14 ">
                <h1 className=" mb-10 text-center text-3xl font-bold">My Cart</h1>
                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center  h-64 p-4">
                        <p className="text-xl mb-4">Your cart is empty.</p>
                        <p onClick={() => navigate("/products")} className="text-xl underline underline-offset-4 decoration-pink-600 hover:text-pink-800 text-pink-600 cursor-pointer">Add items to your cart to see them here.</p>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                            alt="Empty Cart"
                            className="w-24 h-24 mt-10 opacity-50"
                        />

                    </div>
                ) : (
                    <div className="p-4 flex flex-col lg:flex-row  gap-8  items-center lg:items-start justify-center">
                        <div className="flex w-full max-w-3xl flex-wrap sm:flex-col items-center justify-center gap-4 ">
                            {cart.map(product => (
                                <HorizontalProductCard key={product._id} product={product} />
                            ))}
                        </div>
                        <PriceComponent onPlaceOrder={true} />
                    </div>

                )}

            </main>
            <Footer />
        </>
    )
}