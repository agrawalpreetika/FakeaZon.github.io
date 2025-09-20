


// import { Navbar } from "../components/Navbar";
// import { Link, useNavigate } from "react-router-dom";
// import men from '../assets/good-faces-IL1oeY0pN2k-unsplash.jpg';
// import women from '../assets/mike-von-2UTk-Nip5aM-unsplash.jpg';
// import kids from '../assets/the-nix-company-CkCUvwMXAac-unsplash.jpg';
// import { Footer } from '../components/Footer';

// export const Home = () => {
//     const navigate = useNavigate();

//     const goToCategory = (category) => {
//         navigate('/products', { state: { category } });
//     };

//     return (
//         <>
//             <Navbar />
//             <main className="pt-14 bg-gray-100 min-h-screen pb-10">

//                 {/* Hero Section */}
//                 <section className="relative bg-gradient-to-r from-pink-500 to-pink-400 text-white flex flex-col items-center justify-center text-center px-6 py-32 md:py-48 overflow-hidden">
//                     <div className="absolute inset-0 bg-black opacity-20"></div> {/* subtle overlay */}
//                     <h1 className="relative text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fadeIn">
//                         Welcome to FakeaZon
//                     </h1>
//                     <p className="relative text-lg md:text-2xl mb-6 drop-shadow-md animate-fadeIn delay-200">
//                         Discover the best products for every style and need
//                     </p>
//                     <Link
//                         to="/products"
//                         className="relative bg-white text-pink-500 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-pink-100 transition transform hover:scale-105"
//                     >
//                         Shop Now
//                     </Link>
//                 </section>

//                 {/* Featured Categories */}
//                 <section className="px-6 md:px-16 py-16">
//                     <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//                         Featured Categories
//                     </h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//                         {[{ img: men, title: "Men" }, { img: women, title: "Women" }, { img: kids, title: "Kids" }].map((cat) => (
//                             <div
//                                 key={cat.title}
//                                 className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer transform transition hover:scale-105 hover:-rotate-1"
//                                 onClick={() => goToCategory(cat.title.toLowerCase())}
//                             >
//                                 <img src={cat.img} alt={cat.title} className="w-32 h-32 object-cover rounded-full mb-4 shadow-md" />
//                                 <h3 className="font-semibold text-lg text-gray-700">{cat.title}</h3>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Promo Section */}
//                 <section className="bg-gradient-to-r from-pink-50 to-pink-100 py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between rounded-xl shadow-lg mx-6 md:mx-16 my-12">
//                     <div className="md:w-2/3 text-center md:text-left">
//                         <h2 className="text-3xl font-bold text-pink-600 mb-4">Exclusive Deals!</h2>
//                         <p className="text-gray-700 mb-6">
//                             Sign up and grab amazing discounts on your favorite products.
//                         </p>
//                         <Link
//                             to="/products"
//                             className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-pink-600 transition transform hover:scale-105"
//                         >
//                             Explore Deals
//                         </Link>
//                     </div>
//                     <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
//                         <img
//                             src="https://images.unsplash.com/photo-1521334884684-d80222895322"
//                             alt="Exclusive Deals"
//                             className="rounded-xl shadow-xl transform hover:scale-105 transition"
//                         />
//                     </div>
//                 </section>

//             </main>
//             <Footer />
//         </>
//     );
// };


import { Navbar } from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import men from '../assets/good-faces-IL1oeY0pN2k-unsplash.jpg';
import women from '../assets/mike-von-2UTk-Nip5aM-unsplash.jpg';
import kids from '../assets/the-nix-company-CkCUvwMXAac-unsplash.jpg';
import { Footer } from '../components/Footer';

export const Home = () => {
    const navigate = useNavigate();
    const goToCategory = (category) => navigate('/products', { state: { category } });

    return (
        <>
            <Navbar />

            <main className="bg-gray-200 pb-5 mt-14">

                {/* Hero Section */}
                <section className="relative bg-gray-900 text-white flex items-center justify-center text-center py-36 md:py-48 overflow-hidden">
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative px-6 md:px-0 max-w-4xl animate-fadeIn">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                            Discover <span className="text-pink-500">Amazing Products</span>
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-gray-200">
                            Quality, style, and convenience—all in one place. Shop the best products for your lifestyle.
                        </p>
                        <Link
                            to="/products"
                            className="bg-pink-500 hover:bg-pink-600 transition px-10 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105"
                        >
                            Shop Now
                        </Link>
                    </div>
                </section>

                {/* Featured Categories */}
                <section className="py-24 px-6 md:px-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Shop by Category</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {[{ img: men, title: "Men" }, { img: women, title: "Women" }, { img: kids, title: "Kids" }].map(cat => (
                            <div
                                key={cat.title}
                                onClick={() => goToCategory(cat.title.toLowerCase())}
                                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
                            >
                                <img
                                    src={cat.img}
                                    alt={cat.title}
                                    className="w-full h-64 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                    <h3 className="text-2xl font-bold text-white">{cat.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Features */}
                <section className="py-20 px-6 md:px-16 bg-white">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Why Shop With Us</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            { icon: "🎯", title: "Premium Quality", desc: "Only the best products curated for you." },
                            { icon: "🚀", title: "Fast Delivery", desc: "Receive your orders in record time." },
                            { icon: "💎", title: "Satisfaction Guarantee", desc: "Love it or return it hassle-free." },
                        ].map((feat) => (
                            <div key={feat.title} className="bg-gray-50 p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl transition">
                                <div className="text-5xl mb-4">{feat.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
                                <p className="text-gray-600">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Premium Modern Promo Section */}
                <section className="my-20 relative bg-gradient-to-r from-gray-50 to-gray-100 py-15 md:py-22 px-6 md:px-16 rounded-3xl overflow-hidden shadow-md mx-6 md:mx-16 flex flex-col md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Discover Exclusive Collections
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl max-w-lg">
                            Upgrade your wardrobe and lifestyle with premium selections curated just for you. Enjoy limited-time deals and elegant products that match your style.
                        </p>
                        <Link
                            to="/products"
                            className="inline-block w-fit bg-gray-900 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-gray-800 transition transform hover:scale-105"
                        >
                            Explore Now
                        </Link>
                    </div>

                    {/* Image Stack */}
                    <div className="md:w-1/3 relative flex justify-center items-center">
                        <div className="absolute -top-8 left-0 w-40 h-56 rounded-2xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1521334884684-d80222895322"
                                alt="Promo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute top-8 right-0 w-40 h-56 rounded-2xl overflow-hidden shadow-xl transform -rotate-3 hover:rotate-0 transition duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                                alt="Promo 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>



                {/* Newsletter CTA */}
                <section className="py-24 px-6 md:px-16 bg-white rounded-3xl shadow-lg mx-6 md:mx-16 my-16 text-center">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">Stay Updated</h2>
                    <p className="text-gray-700 mb-6 text-lg">
                        Subscribe to our newsletter to receive updates on new arrivals and exclusive deals.
                    </p>
                    <Link
                        to="/auth/signup"
                        className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-pink-600 transition transform hover:scale-105"
                    >
                        Sign Up Now
                    </Link>
                </section>

            </main>
            <Footer />
        </>
    );
};
