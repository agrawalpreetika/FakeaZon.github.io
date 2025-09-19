import { Signup } from "../components/Signup";
import { Navbar } from "../components/Navbar";

export const AuthSignup = () => {
    return (
        <>
            <Navbar />
            <main className="mt-16 flex justify-center items-center min-h-screen  bg-gray-100">
                <Signup />
            </main>
        </>
    );
};

