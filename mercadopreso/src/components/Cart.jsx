import React from "react";
import { Link } from "react-router-dom";

function Cart({ cartItems, handleRemoveFromCart  }) {
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return Number(totalPrice.toFixed(2));
  };
    console.log(cartItems);
  return (
    <div className="cart">
      <h2>Carrinho</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px" }} />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>Preço por unidade: ${item.price}</p>
              <p>Quantidade: {item.quantity}</p>
              <p>Preço total: ${Number((item.price * item.quantity).toFixed(2))}</p>
            </div>
          </li>
        ))}
      </ul>
      <p>Preço total do carrinho: ${calculateTotalPrice()}</p>
      <Link to={'/checkout'} state={{cartItems}}>
        <button>Finalizar Compra</button>
      </Link>
    </div>
  );
}

export default Cart;
