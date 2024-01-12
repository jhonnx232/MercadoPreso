import React, { useState } from "react";

const Header = ({ handleShowCart, cartItemCount, handleCategoryClick }) => {
  const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
  const [showCategories, setShowCategories] = useState(false);

  const handleToggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleClearFilters = () => {
    handleCategoryClick("");
  };

  return (
    <header>
      <h1>Produtos</h1>
      <button className="cart-button" onClick={handleShowCart}>
        Carrinho ({cartItemCount})
      </button>
      <button className="toggle-categories-button" onClick={handleToggleCategories}>
        {showCategories ? "Ocultar Categorias" : "Mostrar Categorias"}
      </button>
      {showCategories && (
        <>
          {categories.map((category) => (
            <button key={category} className="category-button" onClick={() => handleCategoryClick(category)}>
              {category}
            </button>
          ))}
          <button className="clear-filters-button" onClick={handleClearFilters}>
            Limpar Filtros
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
