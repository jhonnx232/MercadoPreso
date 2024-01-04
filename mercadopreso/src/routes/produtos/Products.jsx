import { useEffect, useState } from "react";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../../components/productCard";
import FilterBar from "../../components/filterBar";
import Cart from "../../components/cart";
import "./Products.css";


function Products() {
  const [produtos, setprodutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetchProducts().then((response) => {
      setprodutos(response);
      setIsLoading(false);
    });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <h1>Produtos</h1>
      <button className="cart-button" onClick={handleShowCart}>
        Carrinho ({cartItems.length})
      </button>
      {showCart && <Cart cartItems={cartItems} />}
      <FilterBar categories={["electronics", "jewelery", "men's clothing", "women's clothing"]} handleClick={handleCategoryClick} />
      {isLoading ? (
        <h2>Carregando...</h2>
      ) : (
        <section className="products">
          {produtos.filter((produto) => produto.category === selectedCategory || selectedCategory === "").map((produto) => {
            return <ProductCard key={produto.id} data={produto} handleAddToCart={handleAddToCart} />;
          })}
        </section>
      )}
    </>
  );
}

export default Products;
