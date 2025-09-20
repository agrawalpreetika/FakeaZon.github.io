import { Navbar } from "../components/Navbar"
import { useCart } from "../context/cart-context"
import { useWishList } from "../context/wishlist-context"
import { WishListProduct } from "../components/WishListProduct"
import { Footer } from "../components/Footer"

export const WishList = () => {
    const { addToCart } = useCart();
    const { wishList } = useWishList();

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-100 mt-14 py-10 px-5">
                {/* Page Title */}
                <h1 className="mb-10 text-center text-3xl font-bold">My Wishlist</h1>

                {/* Empty Wishlist */}
                {wishList.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64">
                        <p className="text-lg mb-4">Your wishlist is empty.</p>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                            alt="Empty Wishlist"
                            className="w-24 h-24 opacity-50"
                        />
                    </div>
                ) : (
                    /* Responsive Product Flexbox */
                    <div
                        className="
                flex flex-wrap gap-6 justify-center"
                    >
                        {wishList.map((product) => (
                            <div
                                key={product._id}
                                className="flex-grow j sm:flex-grow-0 sm:w-[48%] md:w-[33%] lg:w-[23%] xl:w-[18%] max-w-xs"
                            >
                                <WishListProduct product={product} />
                            </div>
                        ))}
                    </div>
                )}
                {/* Footer */}

            </main>
            <Footer />
        </>
    );
};
