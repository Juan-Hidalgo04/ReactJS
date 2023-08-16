import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './Context/cartContext';
import CartContainer from './Components/CartContainer/CartContainer';
import OrderConfirm from './Components/OrderConfirm/OrderConfirm';
import Checkout from './Components/Checkout/Checkout';



function App() {

  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <header className="App-header">
          <img src="/assets/Heading_home.webp" alt="Travel" className="center_img" />
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/order-confirmation/:id" element={<OrderConfirm />} /> 
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>Page not found: 404</h1>} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
