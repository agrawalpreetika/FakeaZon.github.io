const baseUrl = 'https://fakestoreapiserver.reactbd.org/api'

export const getAllProducts = async () => {
    const url = `${baseUrl}/products`
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching products:", error)
        throw error
    }
    

}