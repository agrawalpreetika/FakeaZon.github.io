import { mapDummyProduct } from "./dummyjsonMapper"
import productsSnapshot from "../data/products-snapshot.json"

// reactbd.org (the previous API) is dead (DNS no longer resolves), so we use
// DummyJSON instead. mapDummyProduct() adapts its response shape to what the
// UI components already expect, so no component code had to change.
const baseUrl = 'https://dummyjson.com'

export const getAllProducts = async () => {
    const url = `${baseUrl}/products?limit=0` // limit=0 = return all products
    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const data = await response.json()
        return { data: data.products.map(mapDummyProduct) }
    } catch (error) {
        console.error("Error fetching products, falling back to local snapshot:", error)
        return { data: productsSnapshot.products.map(mapDummyProduct) }
    }
}

export const getProductById = async (id) => {
    const url = `${baseUrl}/products/${id}`
    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const data = await response.json()
        return mapDummyProduct(data)
    } catch (error) {
        console.error(`Error fetching product ${id}, falling back to local snapshot:`, error)
        const fallback = productsSnapshot.products.find((p) => String(p.id) === String(id))
        return fallback ? mapDummyProduct(fallback) : null
    }
}
