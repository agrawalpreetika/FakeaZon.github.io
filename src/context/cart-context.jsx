import { createContext, useContext, useState, useEffect } from "react";
import { addToBackendCart } from "../api/backendApi";
import { getAdminAuth } from "../utils/adminAuth";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    //const [cart, setCart] = useState([]);

    // for local storage persistence
    const [cart, setCart] = useState(() => {
        // Load cart from localStorage when app starts
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart((prev) => [...prev, { ...item, quantity: 1 }]);

        // Experiment 10: if logged in (our own backend's JWT, not the Platzi
        // one), also mirror the add into the backend cart. Fire-and-forget —
        // the localStorage cart above stays the source of truth for the UI.
        const auth = getAdminAuth();
        if (auth?.token) {
            addToBackendCart({
                productId: item._id,
                title: item.title,
                price: item.discountedPrice,
                qty: 1,
                image: item.image,
            }).catch((err) => console.error("Failed to sync item to backend cart:", err.message));
        }
    };

    const removeFromCart = (id) => setCart((prev) => prev.filter(i => i._id !== id));

    const increaseQty = (id) => {
        setCart((prev) =>
            prev.map((item) =>
                item._id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCart((prev) =>
            prev.map((item) =>
                item._id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
            )
        );
    };

    // Empties the cart — used once an order is successfully placed.
    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => useContext(CartContext);

