// import { Navbar } from "../components/Navbar";
// import { Footer } from "../components/Footer";
// export const About = () => {
//     return (
//         <>
//             <Navbar />
//             <div className="min-h-screen bg-gray-50 text-gray-800 pt-20">
//                 {/* Hero Section */}
//                 <section className="max-w-6xl mx-auto text-center px-6 py-12">
//                     <h1 className="text-4xl md:text-5xl font-extrabold font-jost text-pink-600 mb-4">
//                         About FakeaZon
//                     </h1>
//                     <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//                         Welcome to <span className="font-semibold text-gray-800">FakeaZon</span> —
//                         your one-stop destination for exploring a seamless shopping experience.
//                         We’re not just a store, we’re here to make online shopping smarter, faster, and more fun.
//                     </p>
//                 </section>

//                 {/* Who We Are */}
//                 <section className="bg-white shadow-sm py-12">
//                     <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
//                         <img
//                             src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
//                             alt="Team"
//                             className="rounded-2xl shadow-md"
//                         />
//                         <div>
//                             <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
//                             <p className="text-gray-600 leading-relaxed">
//                                 FakeaZon is a student-driven project designed to replicate the look and feel of
//                                 a modern e-commerce platform. We’re passionate learners exploring React, Tailwind,
//                                 and the art of building user-friendly applications.
//                             </p>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Mission Section */}
//                 <section className="py-12">
//                     <div className="max-w-6xl mx-auto px-6 text-center">
//                         <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
//                         <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                             Our mission is simple: <span className="font-semibold">Learn by building</span>.
//                             With FakeaZon, we’re experimenting with real-world web development concepts —
//                             from authentication and context management to cart handling and UI design — all while
//                             creating something fun and interactive.
//                         </p>
//                     </div>
//                 </section>

//                 {/* Why Choose Us */}
//                 <section className="bg-gradient-to-b from-pink-100 to-gray-50 py-12">
//                     <div className="max-w-6xl mx-auto px-6">
//                         <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
//                             Why Choose FakeaZon?
//                         </h2>
//                         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//                             <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
//                                 <h3 className="text-xl font-semibold text-pink-600 mb-2">Sleek UI</h3>
//                                 <p className="text-gray-600">
//                                     Clean, modern, and responsive interface for a smooth user experience.
//                                 </p>
//                             </div>
//                             <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
//                                 <h3 className="text-xl font-semibold text-pink-600 mb-2">Real Features</h3>
//                                 <p className="text-gray-600">
//                                     From wishlist and cart to login/logout flows — it feels like a real store.
//                                 </p>
//                             </div>
//                             <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
//                                 <h3 className="text-xl font-semibold text-pink-600 mb-2">Learning First</h3>
//                                 <p className="text-gray-600">
//                                     Built with the goal of mastering React, Tailwind, and web development best practices.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Footer CTA */}
//                 <section className="text-center py-12 px-5">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Let’s Build Together 🚀</h2>
//                     <p className="text-gray-600 mb-6">
//                         FakeaZon is still growing — just like us. Stay tuned for more features and improvements!
//                     </p>
//                 </section>
//             </div>
//             <Footer />
//         </>
//     );
// };

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";

export const About = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 text-gray-800 pt-20">
                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-white to-pink-50"></div>
                    <div className="relative max-w-6xl mx-auto text-center px-6 py-20">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl font-extrabold font-jost text-pink-600 mb-6"
                        >
                            About <span className="text-gray-800">FakeaZon</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            Welcome to <span className="font-semibold text-gray-800">FakeaZon</span> —
                            your one-stop destination for a seamless shopping experience.
                            We’re here to make online shopping <span className="text-pink-500 font-medium">smarter, faster, and more fun</span>.
                        </motion.p>
                    </div>
                </section>

                {/* Who We Are */}
                <section className="bg-white py-16">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                        <motion.img
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                            alt="Team"
                            className="rounded-3xl shadow-xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                FakeaZon is a <span className="font-medium">student-driven project</span> built to replicate
                                a modern e-commerce platform. We’re passionate learners exploring
                                <span className="text-pink-600 font-medium"> React, Tailwind, and real-world web development</span>.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 bg-gradient-to-b from-gray-50 to-pink-50">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
                            Our mission is simple: <span className="font-semibold text-gray-800">Learn by building</span>.
                            With FakeaZon, we’re experimenting with real-world concepts —
                            from <span className="text-pink-500 font-medium">authentication, cart handling, UI design </span>
                            to <span className="text-pink-500 font-medium">modern best practices</span>.
                        </p>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                            Why Choose <span className="text-pink-600">FakeaZon?</span>
                        </h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {[
                                { icon: <FaRocket size={28} />, title: "Sleek UI", desc: "Clean, modern, and responsive design." },
                                { icon: <FaUsers size={28} />, title: "Real Features", desc: "Wishlist, cart, and authentication included." },
                                { icon: <FaLightbulb size={28} />, title: "Learning First", desc: "Hands-on project with React & Tailwind." },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.05 }}
                                    className="p-8 bg-white rounded-2xl shadow-md hover:shadow-sm transition text-center"
                                >
                                    <div className="flex justify-center mb-4 text-pink-600">{item.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="text-center py-16 bg-gradient-to-r from-pink-600 to-pink-400 text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Build Together 🚀</h2>
                    <p className="mb-6 text-pink-100 text-lg">
                        FakeaZon is growing — just like us. Stay tuned for more features & improvements!
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
};
