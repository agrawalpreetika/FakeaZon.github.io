import { Login } from "../components/Login";
import { Navbar } from "../components/Navbar";

export const AuthLogin = () => {
    return (
        <>
            <Navbar />
            <main className="mt-16 flex justify-center items-center min-h-screen  bg-gray-100">
                <Login />
            </main>
        </>
    );
};

