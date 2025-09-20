// export const CheckoutForm = ({ formData, setFormData }) => {
//     return (
//         <div className="w-full max-w-xl space-y-6">
//             {/* Full Name */}
//             <div className="relative">
//                 <input
//                     type="text"
//                     id="name"
//                     placeholder=" "
//                     className="peer w-full border border-gray-300 rounded-lg p-4 pt-6.5 focus:outline-none focus:border-pink-600 focus:ring-1 focus:ring-pink-600 transition"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}

//                 />
//                 <label
//                     htmlFor="name"
//                     className="absolute left-4 top-1.5 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-gray-700 peer-focus:text-sm transition-all"
//                 >
//                     Full Name
//                 </label>
//             </div>

//             {/* Phone Number */}
//             <div className="relative">
//                 <input
//                     type="tel"
//                     id="phone"
//                     placeholder=" "
//                     className="peer w-full border border-gray-300 rounded-lg p-4 pt-6 focus:outline-none focus:border-pink-600 focus:ring-1 focus:ring-pink-600 transition"
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                 />
//                 <label
//                     htmlFor="phone"
//                     className="absolute left-4 top-1.5 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-gray-700 peer-focus:text-sm transition-all"
//                 >
//                     Phone Number
//                 </label>
//             </div>

//             {/* Email */}
//             <div className="relative">
//                 <input
//                     type="email"
//                     id="email"
//                     placeholder=" "
//                     className="peer w-full border border-gray-300 rounded-lg p-4 pt-6 focus:outline-none focus:border-pink-600 focus:ring-1 focus:ring-pink-600 transition"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 />
//                 <label
//                     htmlFor="email"
//                     className="absolute left-4 top-1.5 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-gray-700 peer-focus:text-sm transition-all"
//                 >
//                     Email Address
//                 </label>
//             </div>

//             {/* Address */}
//             <div className="relative">
//                 <textarea
//                     id="address"
//                     placeholder=" "
//                     rows={4}
//                     className="peer w-full border border-gray-300 rounded-lg p-4 pt-6 focus:outline-none focus:border-pink-600 focus:ring-1 focus:ring-pink-600 transition resize-none"
//                     value={formData.address}
//                     onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//                 />
//                 <label
//                     htmlFor="address"
//                     className="absolute left-4 top-1.5 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-gray-700 peer-focus:text-sm transition-all"
//                 >
//                     Shipping Address
//                 </label>
//             </div>

//             {/* Info / Helper Text */}
//             <p className="text-sm text-gray-500">
//                 We'll use this information to process and deliver your order. Make sure all fields are correct.
//             </p>
//         </div>
//     );
// };


export const CheckoutForm = ({ formData, setFormData }) => {
    return (
        <div className="w-full max-w-xl space-y-6">
            {/* Full Name */}
            <div className="relative">
                <input
                    type="text"
                    id="name"
                    placeholder=" "
                    className="peer w-full border border-gray-300 rounded-lg p-4 pt-6.5 focus:outline-none focus:border-pink-600 focus:ring-1 focus:ring-pink-600 transition"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                <label
                    htmlFor="name"
                    className="absolute left-4 top-1.5 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-gray-700 peer-focus:text-sm transition-all"
                >
                    Full Name <span className="text-red-500">*</span>
                </label>
            </div>

            {/* Email */}
            <div className="relative">
                <input
                    type="email"
                    id="email"
                    placeholder=" "
                    className="peer w-full border border-gray-300 rounded-lg p-4 pt-6 focus:outline-none focus:border-pink-600 focus:ring-1 focus:ring-pink-600 transition"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <label
                    htmlFor="email"
                    className="absolute left-4 top-1.5 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-gray-700 peer-focus:text-sm transition-all"
                >
                    Email Address
                </label>
            </div>

            {/* Phone Number */}
            <div className="relative">
                <input
                    type="tel"
                    id="phone"
                    placeholder=" "
                    className="peer w-full border border-gray-300 rounded-lg p-4 pt-6 focus:outline-none focus:border-pink-600 focus:ring-1 focus:ring-pink-600 transition"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                />
                <label
                    htmlFor="phone"
                    className="absolute left-4 top-1.5 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-gray-700 peer-focus:text-sm transition-all"
                >
                    Phone Number <span className="text-red-500">*</span>
                </label>
            </div>

            {/* Address */}
            <div className="relative">
                <textarea
                    id="address"
                    placeholder=" "
                    rows={4}
                    className="peer w-full border border-gray-300 rounded-lg p-4 pt-6 focus:outline-none focus:border-pink-600 focus:ring-1 focus:ring-pink-600 transition resize-none"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                />
                <label
                    htmlFor="address"
                    className="absolute left-4 top-1.5 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-gray-700 peer-focus:text-sm transition-all"
                >
                    Shipping Address <span className="text-red-500">*</span>
                </label>
            </div>

            {/* Info / Helper Text */}
            <p className="text-sm text-gray-500">
                We'll use this information to process and deliver your order. Make sure all required fields are correct.
            </p>
        </div>
    );
};
