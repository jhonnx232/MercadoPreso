import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
  const location = useLocation();
  let id = location.state ;
  const [Produto, setProduto] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`).then((response) => {
      response.json().then((data) => {
        setProduto(data);
      });
    });
  }, [id]);

  const render = () => {
    if (Produto.length === 0) {
      return <p>Carregando...</p>;
    } else {
      return (
        <div>
          <h2>{Produto.title}</h2>
          <p>{Produto.description}</p>
          <img src={Produto.image} alt={Produto.title} />
          <p>
            Classificação: {Produto.rating.rate} ({Produto.rating.count}{" "}
            avaliações)
          </p>
          <p>Categoria: {Produto.category}</p>
          <p>Preço: ${Produto.price}</p>
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
