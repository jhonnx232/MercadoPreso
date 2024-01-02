import {Routes , Route } from 'react-router-dom';
import Login from './routes/Login';
import Products from './routes/Products';
import ProductDetails from './routes/ProductDetails';
import Checkout from './routes/Checkout';
import './App.css'


function App() {
  return (
    <>
    <Routes>
      
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id">
          <ProductDetails />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      
    </Routes>
    </>
  );
}

export default App;
