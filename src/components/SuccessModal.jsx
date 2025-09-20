// import { Dialog } from "@headlessui/react";
// import { useNavigate } from "react-router-dom";

// export const SuccessModal = ({ isOpen, onClose }) => {
//     const navigate = useNavigate();

//     return (
//         <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30">
//             <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
//                 <Dialog.Title className="text-2xl font-bold mb-4">Order Placed Successfully!</Dialog.Title>
//                 <p className="mb-4">Thank you for your purchase. Your order has been received.</p>
//                 <button
//                     onClick={() => {
//                         onClose();
//                         navigate("/");
//                     }}
//                     className="px-6 py-2 rounded bg-pink-600 text-white hover:bg-pink-700 transition"
//                 >
//                     Go to Homepage
//                 </button>
//             </Dialog.Panel>
//         </Dialog>
//     );
// };

import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export const SuccessModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        >
            <DialogPanel className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center space-y-6 animate-fadeIn">

                {/* Success Icon */}
                <div className="flex justify-center">
                    <CheckCircle className="w-16 h-16 text-green-600 animate-bounce" />
                </div>

                {/* Title */}
                <DialogTitle className="text-2xl font-bold text-gray-800">
                    🎉 Order Placed Successfully!
                </DialogTitle>

                {/* Message */}
                <p className="text-gray-600">
                    Thank you for your purchase. Your order has been received and is being processed.
                </p>

                {/* Button */}
                <button
                    onClick={() => {
                        onClose();
                        navigate("/");
                    }}
                    className="px-6 py-3 rounded-lg bg-pink-600 text-white font-medium shadow hover:bg-pink-700 transition"
                >
                    Go to Homepage
                </button>
            </DialogPanel>
        </Dialog>
    );
};


