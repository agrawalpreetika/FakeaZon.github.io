


// import trolley from '../assets/trolley.png'
// import { Heart, ShoppingCart, CircleUserRound, Menu } from "lucide-react";
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/cart-context';
// import { useWishList } from '../context/wishlist-context';
// import { useState } from 'react';
// import { useLogin } from '../context/login-context';

// export const Navbar = () => {
//     const navigate = useNavigate();
//     const { cart } = useCart();
//     const { wishList } = useWishList();
//     const { login, clearLogin } = useLogin();

//     const [menuOpen, setMenuOpen] = useState(false);
//     const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

//     const onLoginClick = () => {
//         if (login.token) {
//             // If user is logged in, log them out
//             clearLogin();
//         }
//         navigate('/auth/login');
//     }

//     return (
//         <header className="fixed top-0 left-0 right-0 z-50 bg-white text-gray-800 shadow-md">
//             <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-3">
//                 {/* Logo */}
//                 <div
//                     className="flex items-center gap-3 cursor-pointer group"
//                     onClick={() => navigate('/')}
//                 >
//                     <img
//                         className="w-9 h-9 md:w-10 md:h-10 transition-transform transform group-hover:rotate-12"
//                         src={trolley}
//                         alt="Shopping Cart"
//                     />
//                     <h1 className="text-xl sm:text-2xl md:text-3xl font-jost font-extrabold tracking-tight group-hover:text-pink-600 transition-colors">
//                         FakeaZon
//                     </h1>
//                 </div>

//                 {/* Desktop Nav */}
//                 <nav className="hidden md:flex items-center gap-8 text-base font-medium">
//                     <span
//                         onClick={() => navigate('/')}
//                         className="hover:text-pink-600 cursor-pointer transition"
//                     >
//                         Home
//                     </span>
//                     <span
//                         onClick={() => navigate('/products')}
//                         className="hover:text-pink-600 cursor-pointer transition"
//                     >
//                         Products
//                     </span>
//                     <span
//                         onClick={() => navigate('/about')}
//                         className="hover:text-pink-600 cursor-pointer transition"
//                     >
//                         About
//                     </span>
//                 </nav>

//                 {/* Icons */}
//                 <div className="flex items-center gap-3 sm:gap-6">
//                     {/* Wishlist */}
//                     <div className="relative">
//                         <Heart
//                             onClick={() => navigate('/wishlist')}
//                             className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:text-red-600 transition"
//                         />
//                         {wishList.length > 0 && login.token && (
//                             <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow">
//                                 {wishList.length}
//                             </span>
//                         )}
//                     </div>

//                     {/* Cart */}
//                     <div className="relative">
//                         <ShoppingCart
//                             onClick={() => navigate('/cart')}
//                             className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:text-blue-600 transition"
//                         />
//                         {cart.length > 0 && login.token && (
//                             <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow">
//                                 {cart.length}
//                             </span>
//                         )}
//                     </div>

//                     <div className="relative">
//                         {/* User */}
//                         <CircleUserRound
//                             onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
//                             className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 hover:text-green-600 cursor-pointer transition"
//                         />

//                         {
//                             isAccountMenuOpen && (
//                                 <button onClick={onLoginClick} className='absolute bg-slate-800 text-white rounded-md px-2 py-1 cursor-pointer'>
//                                     {
//                                         login.token ? 'Logout' : 'Login'
//                                     }
//                                 </button>
//                             )
//                         }

//                     </div>





//                     {/* Mobile Menu Button */}
//                     <button
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
//                     >
//                         <Menu className="w-6 h-6" />
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {menuOpen && (
//                 <div className="md:hidden bg-white border-t border-gray-200 shadow">
//                     <nav className="flex flex-col space-y-3 px-6 py-4 text-base font-medium">
//                         <span
//                             onClick={() => navigate('/')}
//                             className="hover:text-pink-600 cursor-pointer"
//                         >
//                             Home
//                         </span>
//                         <span
//                             onClick={() => navigate('/products')}
//                             className="hover:text-pink-600 cursor-pointer"
//                         >
//                             Products
//                         </span>
//                         <span
//                             onClick={() => navigate('/about')}
//                             className="hover:text-pink-600 cursor-pointer"
//                         >
//                             About
//                         </span>
//                     </nav>
//                 </div>
//             )}
//         </header>
//     );
// };






// import trolley from '../assets/trolley.png'
// import { Heart, ShoppingCart, CircleUserRound, Menu } from "lucide-react";
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/cart-context';
// import { useWishList } from '../context/wishlist-context';
// import { useState } from 'react';
// import { useLogin } from '../context/login-context';

// export const Navbar = () => {
//     const navigate = useNavigate();
//     const { cart } = useCart();
//     const { wishList } = useWishList();
//     const { login, clearLogin } = useLogin();

//     const [menuOpen, setMenuOpen] = useState(false);
//     const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

//     const onLoginClick = () => {
//         if (login.token) {
//             // If user is logged in, log them out
//             clearLogin();
//         }
//         navigate('/auth/login');
//     }

//     return (
//         <header className="fixed top-0 left-0 right-0 z-50 bg-white text-gray-800 shadow-md">
//             <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-3">
//                 {/* Logo */}
//                 <div
//                     className="flex items-center gap-3 cursor-pointer group"
//                     onClick={() => navigate('/')}
//                 >
//                     <img
//                         className="w-9 h-9 md:w-10 md:h-10 transition-transform transform group-hover:rotate-12"
//                         src={trolley}
//                         alt="Shopping Cart"
//                     />
//                     <h1 className="text-xl sm:text-2xl md:text-3xl font-jost font-extrabold tracking-tight group-hover:text-pink-600 transition-colors">
//                         FakeaZon
//                     </h1>
//                 </div>

//                 {/* Desktop Nav */}
//                 <nav className="hidden md:flex items-center gap-8 text-base font-medium">
//                     <span
//                         onClick={() => navigate('/')}
//                         className="hover:text-pink-600 cursor-pointer transition"
//                     >
//                         Home
//                     </span>
//                     <span
//                         onClick={() => navigate('/products')}
//                         className="hover:text-pink-600 cursor-pointer transition"
//                     >
//                         Products
//                     </span>
//                     <span
//                         onClick={() => navigate('/about')}
//                         className="hover:text-pink-600 cursor-pointer transition"
//                     >
//                         About
//                     </span>
//                 </nav>

//                 {/* Icons */}
//                 <div className="flex items-center gap-3 sm:gap-6">
//                     {/* Wishlist */}
//                     <div className="relative">
//                         <Heart
//                             onClick={() => navigate('/wishlist')}
//                             className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:text-red-600 transition"
//                         />
//                         {wishList.length > 0 && login.token && (
//                             <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow">
//                                 {wishList.length}
//                             </span>
//                         )}
//                     </div>

//                     {/* Cart */}
//                     <div className="relative">
//                         <ShoppingCart
//                             onClick={() => navigate('/cart')}
//                             className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:text-blue-600 transition"
//                         />
//                         {cart.length > 0 && login.token && (
//                             <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow">
//                                 {cart.length}
//                             </span>
//                         )}
//                     </div>

//                     <div className="relative">
//                         {/* User */}
//                         <CircleUserRound
//                             onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
//                             className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 hover:text-green-600 cursor-pointer transition"
//                         />

//                         {
//                             isAccountMenuOpen && (
//                                 <button onClick={onLoginClick} className='absolute bg-slate-800 text-white rounded-md px-2 py-1 cursor-pointer'>
//                                     {
//                                         login.token ? 'Logout' : 'Login'
//                                     }
//                                 </button>
//                             )
//                         }

//                     </div>





//                     {/* Mobile Menu Button */}
//                     <button
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
//                     >
//                         <Menu className="w-6 h-6" />
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {menuOpen && (
//                 <div className="md:hidden bg-white border-t border-gray-200 shadow">
//                     <nav className="flex flex-col space-y-3 px-6 py-4 text-base font-medium">
//                         <span
//                             onClick={() => navigate('/')}
//                             className="hover:text-pink-600 cursor-pointer"
//                         >
//                             Home
//                         </span>
//                         <span
//                             onClick={() => navigate('/products')}
//                             className="hover:text-pink-600 cursor-pointer"
//                         >
//                             Products
//                         </span>
//                         <span
//                             onClick={() => navigate('/about')}
//                             className="hover:text-pink-600 cursor-pointer"
//                         >
//                             About
//                         </span>
//                     </nav>
//                 </div>
//             )}
//         </header>
//     );
// };



import trolley from '../assets/trolley.png'
import { Heart, ShoppingCart, CircleUserRound, Menu } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart-context';
import { useWishList } from '../context/wishlist-context';
import { useState, useRef, useEffect } from 'react';
import { useLogin } from '../context/login-context';

export const Navbar = () => {
    const navigate = useNavigate();
    const { cart } = useCart();
    const { wishList } = useWishList();
    const { login, clearLogin } = useLogin();

    const [menuOpen, setMenuOpen] = useState(false);
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
    const accountRef = useRef(null);

    const onLoginClick = () => {
        if (login.token) {
            clearLogin();
            navigate('/'); // after logout go home
        } else {
            navigate('/auth/login');
        }
        setIsAccountMenuOpen(false); // close dropdown after action
    };

    // Close account dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (accountRef.current && !accountRef.current.contains(event.target)) {
                setIsAccountMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white text-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-3">
                {/* Logo */}
                <div
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => navigate('/')}
                >
                    <img
                        className="w-9 h-9 md:w-10 md:h-10 transition-transform transform group-hover:rotate-12"
                        src={trolley}
                        alt="Shopping Cart"
                    />
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-jost font-extrabold tracking-tight group-hover:text-pink-600 transition-colors">
                        FakeaZon
                    </h1>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-base font-medium">
                    <span
                        onClick={() => navigate('/')}
                        className="hover:text-pink-600 cursor-pointer transition"
                    >
                        Home
                    </span>
                    <span
                        onClick={() => navigate('/products')}
                        className="hover:text-pink-600 cursor-pointer transition"
                    >
                        Products
                    </span>
                    <span
                        onClick={() => navigate('/about')}
                        className="hover:text-pink-600 cursor-pointer transition"
                    >
                        About
                    </span>
                </nav>

                {/* Icons */}
                <div className="flex items-center gap-4 sm:gap-6">
                    {/* Wishlist */}
                    <div className="relative">
                        <Heart
                            onClick={() => navigate('/wishlist')}
                            className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:text-red-600 transition"
                        />
                        {wishList.length > 0 && login.token && (
                            <span className="absolute  -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-pink-600 text-white text-xs font-bold w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full shadow">
                                {wishList.length}
                            </span>
                        )}
                    </div>

                    {/* Cart */}
                    <div className="relative">
                        <ShoppingCart
                            onClick={() => navigate('/cart')}
                            className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:text-blue-600 transition"
                        />
                        {cart.length > 0 && login.token && (
                            <span className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-pink-600 text-white text-xs font-bold w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full shadow">
                                {cart.length}
                            </span>
                        )}
                    </div>

                    {/* User / Account Dropdown */}
                    <div className="relative" ref={accountRef}>

                        {login.token && login.avatar ? (

                            <img
                                src={login.avatar}
                                alt="User Avatar"
                                onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover cursor-pointer border border-gray-300 hover:border-green-600 transition"
                            />
                        ) : (
                            <CircleUserRound
                                onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                                className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 hover:text-green-600 cursor-pointer transition"
                            />
                        )}


                        {isAccountMenuOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                                {/* Greeting */}
                                {login.token ? (
                                    <div className="px-4 py-2  text-sm text-gray-700">
                                        <p className="font-semibold">Hi, {login.name || "User"}</p>
                                        <p className="text-xs text-gray-500">{login.email}</p>
                                    </div>
                                ) : (
                                    <div className="px-4 py-2 text-sm text-gray-500">
                                        Not logged in
                                    </div>
                                )}




                                {/* Login/Logout */}
                                <div className="border-t mt-2">
                                    <button
                                        onClick={onLoginClick}
                                        className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                                    >
                                        {login.token ? 'Logout' : 'Login'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-1 rounded-lg hover:bg-gray-100 transition"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Nav (fallback if needed) */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow">
                    <nav className="flex flex-col space-y-3 px-6 py-4 text-base font-medium">
                        <span
                            onClick={() => navigate('/')}
                            className="hover:text-pink-600 cursor-pointer"
                        >
                            Home
                        </span>
                        <span
                            onClick={() => navigate('/products')}
                            className="hover:text-pink-600 cursor-pointer"
                        >
                            Products
                        </span>
                        <span
                            onClick={() => navigate('/about')}
                            className="hover:text-pink-600 cursor-pointer"
                        >
                            About
                        </span>
                    </nav>
                </div>
            )}
        </header>
    );
};
