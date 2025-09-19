// src/pages/Signup.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSignUp } from "../api/auth";

export const Signup = () => {
    const navigate = useNavigate();

    // Local state for signup form
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        avatar: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const onFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await userSignUp(
                formData.name,
                formData.email,
                formData.password,
                formData.avatar
            );

            if (data.id) {
                alert("Signup successful! Please login now.");
                navigate("/auth/login"); // Redirect to login after signup
            } else {
                alert("Signup failed. Try again!");
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong.");
        }
    };

    return (
        <form
            className="w-5/6 md:w-[500px] p-7 md:p-10 flex flex-col gap-4 border border-gray-300 bg-white shadow-md rounded-md md:text-base text-sm"
            onSubmit={onFormSubmit}
        >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Create Account
            </h2>

            <div className="flex flex-col gap-2">
                <span className="text-slate-700">Name:</span>
                <input
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                />
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-slate-700">Email:</span>
                <input
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                />
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-slate-700">Password:</span>
                <input
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-slate-700">Avatar (optional):</span>
                <input
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                    type="url"
                    name="avatar"
                    placeholder="https://picsum.photos/800"
                />
            </div>

            <div className="mx-4 flex justify-center">
                <button
                    type="submit"
                    className="cursor-pointer bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition"
                >
                    Sign Up
                </button>
            </div>
            <div>
                <p className="text-center text-sm text-gray-600">Already have an account? <span onClick={() => navigate('/auth/login')} className="text-pink-600 hover:underline cursor-pointer">Login</span></p>
            </div>

        </form>
    );
};
