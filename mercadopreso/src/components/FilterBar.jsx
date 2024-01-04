import React from "react";

function FilterBar(props) {
  const categories = props.categories;
  const handleClick = props.handleClick;

  return (
    <div className="sidebar">
      <h2>Categorias</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button onClick={() => handleClick(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterBar;
