import { useLocation } from "react-router-dom";
import fetchProducts from "../api/fetchProducts";
import { useEffect , useState } from "react";

function ProductDetails () {

    const location = useLocation()
    const id = location.state?.id
    const [produtos , setprodutos] = useState([])

    useEffect(()=>{
        fetchProducts().then((response) => {
           setprodutos(response)
        })
    } , [])

    

    return (
        <>
            <h1>detalhes</h1>
            <section className="product">
                {
                    
                }
            </section>
        </>
    )
}

export default ProductDetails;