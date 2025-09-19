import { Navbar } from "../components/Navbar"
import { getAllProducts } from "../api/getAllProducts"
import { getAllCategories } from "../api/getAllCategoies"
import { useEffect, useState } from "react"
import { ProductCard } from "../components/ProductCard"
import { useCart } from "../context/cart-context"
import { FilterSidebar } from "../components/FilterSidebar"
import { SearchBar } from "../components/SearchBar"
import { Filter } from "lucide-react"
import { Footer } from "../components/Footer"



export const ProductPage = () => {

    const [products, setProducts] = useState([]) // data from api
    const [filtered, setFiltered] = useState([]); // filtered data
    const categories = [...new Set(products.map(p => p.category))];
    // ["women", "men", "kids"]

    const [filters, setFilters] = useState({
        search: "",
        categories: [],
        priceMin: "",
        priceMax: "",
        sortBy: "",
        rating: 0,
    });

    const { cart } = useCart();
    const [loading, setLoading] = useState(true)   // 👈 loader state

    // fetching products and categories
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProducts()
                setProducts(data.data)
                setFiltered(data.data) // initially filtered is same as products
            } catch (error) {
                console.error("Error fetching products in Home component:", error)
            } finally {
                setLoading(false) // stop loader
            }
        }

        fetchProducts()


    }, [])

    // update filters
    const handleFilterChange = (patch) =>
        setFilters((prev) => ({ ...prev, ...patch }));



    useEffect(() => {
        let updatedList = [...products];

        // search filter
        if (filters.search) {
            const q = filters.search.toLowerCase();
            updatedList = updatedList.filter((product) =>
                product.title.toLowerCase().includes(q)
            );
        }

        // category filter
        if (filters.categories.length) {
            updatedList = updatedList.filter((product) =>
                filters.categories.includes(product.category)
            );
        }

        // price filter
        if (filters.priceMin !== "") {
            updatedList = updatedList.filter(
                (product) => product.discountedPrice >= parseInt(filters.priceMin)
            );
        }

        if (filters.priceMax !== "") {
            updatedList = updatedList.filter(
                (product) => product.discountedPrice <= parseInt(filters.priceMax)
            );
        }

        // rating
        if (filters.rating) updatedList = updatedList.filter((product) => product.rating >= filters.rating);

        // sorting
        if (filters.sortBy === "priceLowHigh")
            updatedList.sort((a, b) => a.discountedPrice - b.discountedPrice);   // 🔹 Min → Max
        else if (filters.sortBy === "priceHighLow")
            updatedList.sort((a, b) => b.discountedPrice - a.discountedPrice);
        else if (filters.sortBy === "newest") {
            // Show "isNew: true" products first
            updatedList.sort((a, b) => (b.isNew === true) - (a.isNew === true));
        }

        setFiltered(updatedList);

    }, [filters, products]);

    return (
        <>
            <Navbar />
            <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                categories={categories}   // 🔹 pass dynamic categories
            />
            <main className="flex-1 bg-gray-100 min-h-screen  md:ml-72 mt-16">



                <div className=" flex justify-center px-4 pt-10 ">
                    <SearchBar
                        value={filters.search}
                        onChange={(value) => handleFilterChange({ search: value })}
                        placeholder="Search products..."
                    />
                </div>
                {loading ? (
                    <div className="flex items-center justify-center h-64 w-full">
                        <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                    </div>
                ) : filtered.length === 0 ? (
                    // NO RESULTS
                    <div className="flex flex-col items-center min-h-screen justify-start h-64">
                        <p className="text-xl mt-7 ">No products found.</p>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                            alt="No Products"
                            className="w-24 h-24 mt-7 opacity-50"
                        />
                    </div>
                ) : (
                    // PRODUCT LIST
                    <div className="flex flex-wrap gap-5 p-4 justify-center">
                        {filtered.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                )}

                {
                    !loading && <Footer />
                }


            </main>

        </>
    )
}

