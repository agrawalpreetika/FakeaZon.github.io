const baseUrl = 'https://fakestoreapiserver.reactbd.org/api'

export const getAllCategories = async () => {
    const url = `${baseUrl}/categories`
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching products:", error)
        throw error
    }
    

}