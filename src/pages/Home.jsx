// import { Navbar } from "../components/Navbar";
// import { Link } from "react-router-dom";
// import men from '../assets/good-faces-IL1oeY0pN2k-unsplash.jpg'
// import women from '../assets/mike-von-2UTk-Nip5aM-unsplash.jpg'
// import kids from '../assets/the-nix-company-CkCUvwMXAac-unsplash.jpg'
// import { Footer } from '../components/Footer'

// export const Home = () => {
//     return (
//         <>
//             <Navbar />
//             <main className="pt-16 bg-gray-100 min-h-screen pb-10">
//                 {/* Hero Section */}
//                 <section className="relative bg-gradient-to-r from-pink-500 to-pink-400 text-white flex flex-col items-center justify-center text-center px-6 py-32 md:py-48">
//                     <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
//                         Welcome to FakeaZon
//                     </h1>
//                     <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
//                         Discover the best products for every style and need
//                     </p>
//                     <Link
//                         to="/products"
//                         className="bg-white text-pink-500 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-pink-100 transition"
//                     >
//                         Shop Now
//                     </Link>
//                 </section>

//                 {/* Featured Section */}
//                 <section className="px-6 md:px-16 py-16">
//                     <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//                         Featured Categories
//                     </h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                         {/* Replace these divs with dynamic category cards later */}
//                         <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transform transition">
//                             <img src={men} alt="Category 1" className="w-32 h-32 object-cover rounded-full mb-4" />
//                             <h3 className="font-semibold text-lg text-gray-700">Men</h3>
//                         </div>
//                         <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transform transition">
//                             <img src={women} alt="Category 2" className="w-32 h-32 object-cover rounded-full mb-4" />
//                             <h3 className="font-semibold text-lg text-gray-700">Women</h3>
//                         </div>
//                         <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transform transition">
//                             <img src={kids} alt="Category 3" className="w-32 h-32 object-cover rounded-full mb-4" />
//                             <h3 className="font-semibold text-lg text-gray-700">Kids</h3>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Optional Promo Section */}
//                 <section className="bg-pink-50 py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between rounded-xl shadow-md mx-6 md:mx-16 my-12">
//                     <div className="md:w-2/3">
//                         <h2 className="text-3xl font-bold text-pink-600 mb-4">Exclusive Deals!</h2>
//                         <p className="text-gray-700 mb-4">
//                             Sign up and grab amazing discounts on your favorite products.
//                         </p>
//                         <Link
//                             to="/products"
//                             className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-pink-600 transition"
//                         >
//                             Explore Deals
//                         </Link>
//                     </div>
//                     <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
//                         <img
//                             src="https://images.unsplash.com/photo-1521334884684-d80222895322"
//                             alt="Exclusive Deals"
//                             className="rounded-lg shadow-lg"
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

    const goToCategory = (category) => {
        navigate('/products', { state: { category } });
    };

    return (
        <>
            <Navbar />
            <main className="pt-16 bg-gray-100 min-h-screen pb-10">

                {/* Hero Section */}
                <section className="relative bg-gradient-to-r from-pink-500 to-pink-400 text-white flex flex-col items-center justify-center text-center px-6 py-32 md:py-48 overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-20"></div> {/* subtle overlay */}
                    <h1 className="relative text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fadeIn">
                        Welcome to FakeaZon
                    </h1>
                    <p className="relative text-lg md:text-2xl mb-6 drop-shadow-md animate-fadeIn delay-200">
                        Discover the best products for every style and need
                    </p>
                    <Link
                        to="/products"
                        className="relative bg-white text-pink-500 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-pink-100 transition transform hover:scale-105"
                    >
                        Shop Now
                    </Link>
                </section>

                {/* Featured Categories */}
                <section className="px-6 md:px-16 py-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        Featured Categories
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[{ img: men, title: "Men" }, { img: women, title: "Women" }, { img: kids, title: "Kids" }].map((cat) => (
                            <div
                                key={cat.title}
                                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer transform transition hover:scale-105 hover:-rotate-1"
                                onClick={() => goToCategory(cat.title.toLowerCase())}
                            >
                                <img src={cat.img} alt={cat.title} className="w-32 h-32 object-cover rounded-full mb-4 shadow-md" />
                                <h3 className="font-semibold text-lg text-gray-700">{cat.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Promo Section */}
                <section className="bg-gradient-to-r from-pink-50 to-pink-100 py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between rounded-xl shadow-lg mx-6 md:mx-16 my-12">
                    <div className="md:w-2/3 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-pink-600 mb-4">Exclusive Deals!</h2>
                        <p className="text-gray-700 mb-6">
                            Sign up and grab amazing discounts on your favorite products.
                        </p>
                        <Link
                            to="/products"
                            className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-pink-600 transition transform hover:scale-105"
                        >
                            Explore Deals
                        </Link>
                    </div>
                    <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1521334884684-d80222895322"
                            alt="Exclusive Deals"
                            className="rounded-xl shadow-xl transform hover:scale-105 transition"
                        />
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
};

