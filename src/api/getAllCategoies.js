import { mapDummyCategory } from "./dummyjsonMapper"
import categoriesSnapshot from "../data/categories-snapshot.json"

// reactbd.org (the previous API) is dead (DNS no longer resolves), so we use
// DummyJSON instead. See getAllProducts.js for the same swap on the products
// endpoint.
const baseUrl = 'https://dummyjson.com'

export const getAllCategories = async () => {
    const url = `${baseUrl}/products/categories`
    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const data = await response.json()
        return { data: data.map(mapDummyCategory) }
    } catch (error) {
        console.error("Error fetching categories, falling back to local snapshot:", error)
        return { data: categoriesSnapshot.map(mapDummyCategory) }
    }
}
