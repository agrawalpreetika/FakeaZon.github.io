// Tiny helper around localStorage for the admin JWT session (Experiments 6/7).
// Kept separate from login-context.jsx on purpose: that context is for the
// Platzi-based customer login (cart/wishlist), a completely different auth
// system from our own backend's admin login.
const STORAGE_KEY = "adminAuth";

export const getAdminAuth = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
};

export const setAdminAuth = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const clearAdminAuth = () => {
    localStorage.removeItem(STORAGE_KEY);
};

export const isAdmin = () => getAdminAuth()?.role === "admin";
