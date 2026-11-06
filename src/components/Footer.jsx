export const Footer = () => {
    return (
        <footer className=" bg-gray-800 text-gray-200 py-6 ">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

                {/* Made By Section */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="font-semibold text-lg">Made with ❤️ by Preetika and Nikki</p>
                    <p className="text-sm">© 2026</p>
                </div>

                {/* Disclaimer */}
                <div className="text-center md:text-right text-sm text-gray-400">
                    <p>A full-stack E-Commerce website built with React, Node.js, and MongoDB — crafted with care as part of our BIT 417 coursework.</p>
                </div>
            </div>
        </footer>
    );
};
