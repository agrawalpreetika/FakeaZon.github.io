import { createContext, useContext, useState, useEffect } from "react";


const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
    //const [cart, setCart] = useState([]);

    // for local storage persistence
    const [wishList, setWishList] = useState(() => {
        // Load wishList from localStorage when app starts
        const savedWishList = localStorage.getItem("wishList");
        return savedWishList ? JSON.parse(savedWishList) : [];
    });

    // Save wishList to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("wishList", JSON.stringify(wishList));
    }, [wishList]);

    const addToWishList = (item) => {
        setWishList((prev) => [...prev, item]);
    };

    const removeFromWishList = (id) => setWishList((prev) => prev.filter(i => i._id !== id));


    return (
        <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList }}>
            {children}
        </WishListContext.Provider>
    )
}


export const useWishList = () => useContext(WishListContext);

