import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
    const location = useLocation();
    let id = location.state - 1;
    const [produtos, setprodutos] = useState([]);
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`).then((response) => {
        response.json().then((data) => {
          setprodutos(data);
        });
      });
    }, [id]);
  
    const render = () => {
      if (produtos.length === 0) {
        return <p>Carregando...</p>;
      } else {
        return (
          <div>
            <h2>{produtos.title}</h2>
            <p>{produtos.description}</p>
            <img src={produtos.image} alt={produtos.title} />
            <p>Classificação: {produtos.rating.rate} ({produtos.rating.count} avaliações)</p>
            <p>Categoria: {produtos.category}</p>
            <p>Preço: ${produtos.price}</p>
          </div>
        );
      }
    };
  
    return (
      <>
        <h1>Detalhes</h1>
        <section className="product">{render()}</section>
      </>
    );
  }
  

export default ProductDetails;
