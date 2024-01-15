import { useLocation } from "react-router-dom";



function Checkout (){
  const location= useLocation( )
  const cartItems = location.state.cartItems
  console.log(cartItems);
  

  const items = cartItems.map((item) => (
    <div key={item.name} className="itens">
      <p>Nome: {item.name}</p>
      <p>Categoria: {item.category}</p>
      <img src={item.image} alt={item.name} />
      <p>Preço: R${item.price}</p>
      <p>Quantidade: {item.quantity}</p>
      <p>Preço Total: R${item.price * item.quantity}</p>

      <hr />
    </div>
  ));
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);


return (
  <div className="carrinhoCheck">
    {items}
    <p>Preço total do carrinho : R${totalPrice}</p>
  </div>
)

}



export default Checkout;