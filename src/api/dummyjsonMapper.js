// Maps a raw DummyJSON product/category object into the shape our UI
// components already expect (ProductCard, ProductDetails, ProductPage
// filters). Keeping this mapping in one place means getAllProducts.js,
// getAllCategoies.js and the local JSON snapshot fallback all stay in sync
// without touching any component code.

const humanizeCategory = (slug = "") =>
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

// New-arrival badge: DummyJSON has no "isNew" field, so we derive one from
// how recently the product was created (within the last 60 days).
const NEW_WINDOW_MS = 60 * 24 * 60 * 60 * 1000;

export const mapDummyProduct = (p) => {
    const discountedPrice =
        Math.round(p.price * (1 - (p.discountPercentage || 0) / 100) * 100) / 100;

    const createdAt = p.meta?.createdAt ? new Date(p.meta.createdAt).getTime() : 0;
    const isNew = createdAt > 0 && Date.now() - createdAt < NEW_WINDOW_MS;

    return {
        _id: String(p.id),
        title: p.title,
        description: p.description,
        image: p.thumbnail || p.images?.[0] || "",
        images: p.images || [],
        price: p.price,
        discountedPrice,
        brand: p.brand || "Generic",
        category: humanizeCategory(p.category),
        rating: p.rating,
        stock: p.stock,
        isNew,
    };
};

export const mapDummyCategory = (c) => ({
    slug: c.slug,
    name: c.name,
});
