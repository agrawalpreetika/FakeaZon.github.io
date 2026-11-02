// One-off script to seed sample Products and Offers for demoing Experiment 3.
// Run with: npm run seed  (from inside backend/)
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { Product } from "./models/Product.js";
import { Offer } from "./models/Offer.js";
import { User } from "./models/User.js";

dotenv.config();

const sampleProducts = [
    {
        title: "Wireless Mechanical Keyboard",
        description: "Hot-swappable switches, RGB backlight, USB-C.",
        price: 59.99,
        category: "Electronics",
        stock: 40,
        brand: "Generic",
        image: "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp",
    },
    {
        title: "Ceramic Pour-Over Coffee Set",
        description: "Hand-glazed dripper, server, and two cups.",
        price: 34.5,
        category: "Home",
        stock: 25,
        brand: "Generic",
        image: "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/thumbnail.webp",
    },
    {
        title: "Running Shoes - Trail Edition",
        description: "Lightweight, breathable mesh, grippy outsole.",
        price: 74.0,
        category: "Footwear",
        stock: 60,
        brand: "Generic",
        image: "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp",
    },
];

const sampleOffers = [
    {
        code: "WELCOME10",
        description: "10% off for new customers",
        discountType: "percentage",
        discountValue: 10,
        minOrderValue: 0,
        active: true,
    },
    {
        code: "FLAT50",
        description: "$50 off orders over $200",
        discountType: "flat",
        discountValue: 50,
        minOrderValue: 200,
        active: true,
    },
    {
        code: "EXPIRED20",
        description: "Expired coupon, kept for testing the expiry check",
        discountType: "percentage",
        discountValue: 20,
        minOrderValue: 0,
        active: true,
        expiresAt: new Date("2025-01-01"),
    },
];

// One admin + one customer account for testing RBAC (Experiment 6) and JWT
// login (Experiment 7).
const sampleUsers = [
    { name: "Nikki Gautam", email: "nikki@fakeazon.com", password: "admin123", role: "admin" },
    { name: "Preetika Agrawal", email: "preetika@fakeazon.com", password: "customer123", role: "customer" },
];

const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { dbName: "fakeazon" });
        console.log("MongoDB Connected Successfully!");

        await Product.deleteMany({});
        await Offer.deleteMany({});
        await User.deleteMany({});

        const products = await Product.insertMany(sampleProducts);
        const offers = await Offer.insertMany(sampleOffers);
        const users = await User.insertMany(
            await Promise.all(
                sampleUsers.map(async (u) => ({ ...u, password: await bcrypt.hash(u.password, 10) }))
            )
        );

        console.log(`Seeded ${products.length} products, ${offers.length} offers, ${users.length} users.`);
        console.log("Login with: nikki@fakeazon.com / admin123 (admin), preetika@fakeazon.com / customer123 (customer)");
    } catch (error) {
        console.error("Seed failed:", error);
    } finally {
        await mongoose.disconnect();
    }
};

seed();
