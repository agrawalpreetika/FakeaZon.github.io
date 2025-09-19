import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = ({ value, onChange, placeholder }) => {
    return (
        <div className="flex justify-end mb-4">
            <div className="flex items-center w-full sm:w-80 md:w-96 bg-white px-3 py-2 rounded-lg border shadow-sm focus-within:ring-2 focus-within:ring-pink-500">
                <SearchIcon className="text-gray-400 mr-2" />
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none text-gray-700"
                />
            </div>
        </div>
    );
};
