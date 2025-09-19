
import { useState } from "react";
import { X } from "lucide-react";
import { Filter } from "lucide-react";


export const FilterSidebar = ({ filters, setFilters, categories }) => {
    const [open, setOpen] = useState(false);

    // clear all filters
    const clearFilters = () =>
        setFilters({
            search: "",
            categories: [],
            priceMin: "",
            priceMax: "",
            sortBy: "",
            rating: 0,
        });

    return (
        <>
            {/* Mobile toggle button: only when sidebar is closed */}
            {!open && (
                <button
                    className="fixed bottom-6 right-4 z-40 bg-slate-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-600 transition flex items-center gap-2 md:hidden"
                    onClick={() => setOpen(true)}
                >
                    <Filter className="w-5 h-5" />
                    Filters
                </button>
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed top-16 left-0 h-[calc(100vh-64px)] bg-white shadow-xl w-72 p-6 overflow-y-auto z-40 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:top-16 md:w-72
          border-r border-gray-200 rounded-tr-lg rounded-br-lg
        `}
            >
                {/* Close button for mobile */}
                <div className="flex justify-end md:hidden mb-4">
                    <X className="w-6 h-6 cursor-pointer text-gray-500" onClick={() => setOpen(false)} />
                </div>

                <h2 className="text-2xl font-bold mb-6 text-pink-600">Filters</h2>

                {/* Categories */}
                <div className="mb-6">
                    <h3 className="font-semibold mb-3 text-gray-700">Categories</h3>
                    <div className="space-y-2">
                        {categories.map((cat) => (
                            <label
                                key={cat}
                                className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    checked={filters.categories.includes(cat)}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setFilters((f) => ({ ...f, categories: [...f.categories, cat] }));
                                        } else {
                                            setFilters((f) => ({
                                                ...f,
                                                categories: f.categories.filter((c) => c !== cat),
                                            }));
                                        }
                                    }}
                                    className="accent-pink-500"
                                />
                                <span>{cat}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                    <h3 className="font-semibold mb-3 text-gray-700">Price Range</h3>
                    <div className="flex space-x-3">
                        <input
                            type="number"
                            placeholder="Min"
                            value={filters.priceMin}
                            onChange={(e) => setFilters((f) => ({ ...f, priceMin: e.target.value }))}
                            className="w-24 px-3 py-2 border rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            value={filters.priceMax}
                            onChange={(e) => setFilters((f) => ({ ...f, priceMax: e.target.value }))}
                            className="w-24 px-3 py-2 border rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>
                </div>

                {/* Rating */}
                <div className="mb-6">
                    <h3 className="font-semibold mb-3 text-gray-700">Rating</h3>
                    <div className="space-y-2">
                        {[4, 3, 2].map((r) => (
                            <label
                                key={r}
                                className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="rating"
                                    checked={filters.rating === r}
                                    onChange={() => setFilters((f) => ({ ...f, rating: r }))}
                                    className="accent-pink-500"
                                />
                                <span>{r} ★ & above</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Sort */}
                <div className="mb-6">
                    <h3 className="font-semibold mb-3 text-gray-700">Sort By</h3>
                    <select
                        value={filters.sortBy}
                        onChange={(e) => setFilters((f) => ({ ...f, sortBy: e.target.value }))}
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                    >
                        <option value="">Select</option>
                        <option value="priceLowHigh">Price: Low to High</option>
                        <option value="priceHighLow">Price: High to Low</option>
                        <option value="newest">Newest Arrival</option>
                    </select>
                </div>

                {/* Clear Filters Button */}
                <button
                    onClick={clearFilters}
                    className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg shadow hover:bg-pink-600 transition"
                >
                    Clear Filters
                </button>
            </aside>

            {/* Overlay for mobile when sidebar open */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/30 z-30"  // lighter overlay
                    onClick={() => setOpen(false)}
                ></div>
            )}
        </>
    );
};
