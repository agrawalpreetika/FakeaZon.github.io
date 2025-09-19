import { useLogin } from "../context/login-context";
import { userLogin } from "../api/auth";
import {
    useNavigate

} from "react-router-dom";
export const Login = () => {

    const { login, updateLogin, clearLogin } = useLogin();
    const navigate = useNavigate();

    const onFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await userLogin(login.email, login.password);

            if (data.access_token) {
                updateLogin({ token: data });

                // Fetch user profile
                const profileRes = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
                    headers: {
                        Authorization: `Bearer ${data.access_token}`
                    }
                });
                const profile = await profileRes.json();

                // Save profile info
                updateLogin({
                    email: profile.email,
                    name: profile.name,
                    avatar: profile.avatar
                });

                navigate("/");
            } else {
                alert("Login failed");
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form className="w-5/6 md:w-[500px] p-7 md:p-10 flex flex-col gap-4 border border-gray-300 bg-white shadow-md rounded-md md:text-base text-sm" onSubmit={onFormSubmit}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Login</h2>
            <div className="flex flex-col gap-2">
                <span className="text-slate-700 ">Email:</span>
                <input onChange={(e) => updateLogin({ email: e.target.value })} className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600" type="email" name="email" placeholder="preetika@gmail.com" required />
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-slate-700 ">Password:</span>
                <input onChange={(e) => updateLogin({ password: e.target.value })} className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600" type="password" name="password" placeholder="Password" required />
            </div>
            <div className="mx-4 flex justify-center">
                <button type="submit" className="cursor-pointer bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition">Login</button>
            </div>

            <div>
                <p className="text-center text-sm text-gray-600">Don't have an account? <span onClick={() => navigate('/auth/signup')} className="text-pink-600 hover:underline cursor-pointer">Sign Up</span></p>
            </div>

        </form>
    )
}