import React from "react";

function Cart(props) {
  const { cartItems, handleAddToCart } = props;

  return (
    <div className="cart">
      <h2>Carrinho</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
