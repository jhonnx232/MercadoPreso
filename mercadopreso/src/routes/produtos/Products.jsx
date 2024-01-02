import { useEffect , useState } from "react";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../../components/productCard";
import "./Products.css"

function Products () {
    const [produtos , setprodutos] = useState([])

    useEffect(()=>{
        fetchProducts().then((response) => {
           setprodutos(response)
        })
    } , [])

    return (
        <>
            <h1>Produtos</h1>
            <section className="products" >
            {
             produtos.map((produto) =>{
                return(
                    <ProductCard key={produto.id} data={produto} />
                )
                }
             )
            }
            </section>
        </>
    )
}

export default Products;
