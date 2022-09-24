import { React } from 'react';
import './index.css';
import { Navbar } from './pages/Navbar';
import { Products } from './pages/Products';
import { ErrorPage } from './pages/ErrorPage';
import { Item } from './pages/item';
import { Cart } from './pages/cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import { Practice } from './pages/practice';

const url = 'https://dummyjson.com/products';

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Products />} />
          <Route path='/item/:id' element={<Item />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/prac' element={<Practice />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
