import {Routes , Route } from 'react-router-dom';
import Login from './routes/login/Login';
import Products from './routes/produtos/Products';
import ProductDetails from './routes/ProductDetails';
import Checkout from './routes/Checkout';



function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Login/> }/> 
      <Route path='/products' element={<Products/> }/> 
      <Route path='/products/:id' element={<ProductDetails/> }/> 
      <Route path='/checkout' element={<Checkout/> }/> 
    </Routes>
  );
}

export default App;
