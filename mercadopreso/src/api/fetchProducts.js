
const fetchProducts = async(query) =>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(query)
    
    return data
}

export default fetchProducts 