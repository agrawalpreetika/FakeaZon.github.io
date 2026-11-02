import axios from "axios";
import { getAdminAuth } from "../utils/adminAuth";

// Client for our own Express + MongoDB backend (backend/), via Axios
// (Experiment 5). Separate from getAllProducts.js / getAllCategoies.js,
// which talk to the DummyJSON third-party catalog — this file is for the
// modules we actually own: Admin product management, users, coupon/offer
// validation, and order history.
const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5050/api";

const api = axios.create({ baseURL: baseUrl });

// Attach the admin JWT (Experiments 6/7) to every request, if we have one.
// Routes that don't require it just ignore the header.
api.interceptors.request.use((config) => {
    const auth = getAdminAuth();
    if (auth?.token) {
        config.headers.Authorization = `Bearer ${auth.token}`;
    }
    return config;
});

const request = async (path, options = {}) => {
    try {
        const response = await api.request({ url: path, ...options });
        return response.data;
    } catch (err) {
        const message = err.response?.data?.message || err.message || "Request failed";
        throw new Error(message);
    }
};

// ---- Products (our own catalog, managed via the Admin page) ----
export const fetchBackendProducts = () => request("/products");
export const createBackendProduct = (product) => request("/products", { method: "POST", data: product });
export const updateBackendProduct = (id, product) =>
    request(`/products/${id}`, { method: "PUT", data: product });
export const deleteBackendProduct = (id) => request(`/products/${id}`, { method: "DELETE" });

// ---- Users ----
export const fetchBackendUsers = () => request("/users");
export const createBackendUser = (user) => request("/users", { method: "POST", data: user });
export const loginUser = (email, password) =>
    request("/users/login", { method: "POST", data: { email, password } });

// ---- Offers / coupons ----
export const applyCoupon = (code, subtotal) =>
    request("/offers/apply", { method: "POST", data: { code, subtotal } });

// ---- Cart (Experiment 10, logged-in users only) ----
export const addToBackendCart = (item) => request("/cart/add", { method: "POST", data: item });

// ---- Orders ----
export const placeOrder = (orderPayload) => request("/orders", { method: "POST", data: orderPayload });
export const fetchOrderHistory = (email) => request("/orders", { params: { email } });
