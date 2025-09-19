import { createContext, useContext, useState, useEffect } from "react";


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

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => useContext(CartContext);

