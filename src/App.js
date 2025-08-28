import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./Cart";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar';
import Hero from './Hero';
import './main.css';
import Cards from './Cards';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <NavBar cartCount={cart.length} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="container my-5">
                <Cards addToCart={addToCart} />
              </div>
            </>
          }
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </Router>
  );
}
export default App;