import { useEffect, useState } from "react";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../../components/productCard";
import "./Products.css";

function Products() {
  const [produtos, setprodutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((response) => {
      setprodutos(response);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <h1>Produtos</h1>
      {isLoading ? (
        <h2>Carregando...</h2>
      ) : (
        <section className="products">
          {produtos.map((produto) => {
            return <ProductCard key={produto.id} data={produto} />;
          })}
        </section>
      )}
    </>
  );
}

export default Products;
