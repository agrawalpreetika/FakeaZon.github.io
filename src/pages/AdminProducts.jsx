import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {
    fetchBackendProducts,
    createBackendProduct,
    updateBackendProduct,
    deleteBackendProduct,
} from "../api/backendApi";
import { getAdminAuth, clearAdminAuth } from "../utils/adminAuth";
import { Pencil, Trash2, LogOut } from "lucide-react";

const emptyForm = { title: "", description: "", price: "", category: "", stock: "", image: "", brand: "" };

// Admin Product Catalog management (Experiment 3: Product Catalog CRUD).
// Talks to our own Express/MongoDB backend, not the DummyJSON catalog
// customers browse under /products.
export const AdminProducts = () => {
    const navigate = useNavigate();
    const auth = getAdminAuth();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [form, setForm] = useState(emptyForm);
    const [editingId, setEditingId] = useState(null);
    const [saving, setSaving] = useState(false);

    const loadProducts = async () => {
        setLoading(true);
        try {
            const { data } = await fetchBackendProducts();
            setProducts(data);
            setError("");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const resetForm = () => {
        setForm(emptyForm);
        setEditingId(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setError("");
        try {
            const payload = {
                ...form,
                price: Number(form.price),
                stock: Number(form.stock) || 0,
            };
            if (editingId) {
                await updateBackendProduct(editingId, payload);
            } else {
                await createBackendProduct(payload);
            }
            resetForm();
            await loadProducts();
        } catch (err) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleEdit = (product) => {
        setEditingId(product._id);
        setForm({
            title: product.title,
            description: product.description || "",
            price: product.price,
            category: product.category,
            stock: product.stock,
            image: product.image || "",
            brand: product.brand || "",
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleDelete = async (id) => {
        if (!confirm("Delete this product?")) return;
        try {
            await deleteBackendProduct(id);
            await loadProducts();
        } catch (err) {
            setError(err.message);
        }
    };

    const handleLogout = () => {
        clearAdminAuth();
        navigate("/admin/login");
    };

    // Gate: only a logged-in admin gets the CRUD form (RBAC, Experiment 6).
    // The role here comes from the server-issued JWT (via adminAuth), not a
    // hardcoded email check.
    if (auth?.role !== "admin") {
        return (
            <>
                <Navbar />
                <main className="min-h-screen bg-gray-100 mt-14 flex flex-col items-center justify-center gap-4 px-4">
                    <p className="text-lg text-gray-700">
                        {auth ? "You don't have admin access." : "Please log in as an admin to manage products."}
                    </p>
                    <button
                        onClick={() => navigate("/admin/login")}
                        className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
                    >
                        Go to Admin Login
                    </button>
                </main>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-100 mt-14 py-10 px-4 md:px-10">
                <div className="max-w-3xl mx-auto flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">Admin · Product Catalog</h1>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition"
                    >
                        <LogOut className="w-4 h-4" /> Logout ({auth.name})
                    </button>
                </div>

                {error && (
                    <div className="max-w-3xl mx-auto mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                        {error}
                    </div>
                )}

                {/* Add / Edit form */}
                <form
                    onSubmit={handleSubmit}
                    className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6 mb-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                    <h2 className="sm:col-span-2 text-xl font-semibold text-slate-800">
                        {editingId ? "Edit Product" : "Add New Product"}
                    </h2>

                    <input
                        name="title" value={form.title} onChange={handleChange} required
                        placeholder="Title" className="border rounded-lg p-3 focus:outline-none focus:border-pink-600"
                    />
                    <input
                        name="brand" value={form.brand} onChange={handleChange}
                        placeholder="Brand" className="border rounded-lg p-3 focus:outline-none focus:border-pink-600"
                    />
                    <input
                        name="price" type="number" step="0.01" min="0" value={form.price} onChange={handleChange} required
                        placeholder="Price ($)" className="border rounded-lg p-3 focus:outline-none focus:border-pink-600"
                    />
                    <input
                        name="stock" type="number" min="0" value={form.stock} onChange={handleChange}
                        placeholder="Stock" className="border rounded-lg p-3 focus:outline-none focus:border-pink-600"
                    />
                    <input
                        name="category" value={form.category} onChange={handleChange} required
                        placeholder="Category" className="border rounded-lg p-3 focus:outline-none focus:border-pink-600"
                    />
                    <input
                        name="image" value={form.image} onChange={handleChange}
                        placeholder="Image URL" className="border rounded-lg p-3 focus:outline-none focus:border-pink-600"
                    />
                    <textarea
                        name="description" value={form.description} onChange={handleChange}
                        placeholder="Description" rows={3}
                        className="sm:col-span-2 border rounded-lg p-3 focus:outline-none focus:border-pink-600 resize-none"
                    />

                    <div className="sm:col-span-2 flex gap-3">
                        <button
                            type="submit" disabled={saving}
                            className="bg-pink-600 disabled:bg-slate-400 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
                        >
                            {saving ? "Saving..." : editingId ? "Update Product" : "Add Product"}
                        </button>
                        {editingId && (
                            <button type="button" onClick={resetForm} className="px-6 py-2 rounded-lg border hover:bg-gray-100 transition">
                                Cancel
                            </button>
                        )}
                    </div>
                </form>

                {/* Product list */}
                <h2 className="text-2xl font-semibold text-center mb-6">Manage Products</h2>
                {loading ? (
                    <div className="flex justify-center">
                        <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                ) : products.length === 0 ? (
                    <p className="text-center text-gray-500">No products yet. Add one above.</p>
                ) : (
                    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div key={product._id} className="bg-white rounded-xl shadow p-4 flex flex-col">
                                <img
                                    src={product.image || "https://via.placeholder.com/300x200?text=No+Image"}
                                    alt={product.title}
                                    className="w-full h-36 object-cover rounded-lg mb-3"
                                    onError={(e) => { e.target.src = "https://via.placeholder.com/300x200?text=No+Image"; }}
                                />
                                <h3 className="font-semibold text-slate-800">{product.title}</h3>
                                <p className="text-sm text-gray-500">{product.category} · {product.brand}</p>
                                <p className="text-pink-600 font-bold mt-1">${product.price}</p>
                                <p className={`text-xs mt-1 ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
                                    {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                                </p>
                                <div className="flex gap-2 mt-3">
                                    <button
                                        onClick={() => handleEdit(product)}
                                        className="flex-1 flex items-center justify-center gap-1 bg-slate-800 text-white py-2 rounded-lg hover:bg-slate-700 transition text-sm"
                                    >
                                        <Pencil className="w-4 h-4" /> Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product._id)}
                                        className="flex-1 flex items-center justify-center gap-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition text-sm"
                                    >
                                        <Trash2 className="w-4 h-4" /> Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
};
