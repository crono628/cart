import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import data from './components/data';
import Cart from './components/Cart';
import Nav from './components/Nav';
import Showroom from './components/Showroom';
import Welcome from './components/Welcome';

const App = () => {
  const [cart, setCart] = useState([]);

  const onAdd = (product) => {
    const inBag = cart.find((item) => item.id === product.id);
    let copy = [...cart];
    if (inBag) {
      setCart(
        copy.map((item) =>
          item.id === product.id ? { ...inBag, qty: inBag.qty + 1 } : item
        )
      );
    } else {
      setCart([...copy, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const inBag = cart.find((item) => item.id === product.id);
    let copy = [...cart];
    if (inBag.qty === 1) {
      setCart(copy.filter((items) => items.id !== product.id));
    } else {
      setCart(
        copy.map((item) =>
          item.id === product.id ? { ...inBag, qty: inBag.qty - 1 } : item
        )
      );
    }
  };

  const cartQuantity = cart.reduce((a, b) => a + b.qty, 0);

  return (
    <div>
      <Nav quantity={cartQuantity} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/showroom"
            element={<Showroom inventory={data} onAdd={onAdd} />}
          />
          <Route
            path="/shopping-cart"
            element={<Cart onRemove={onRemove} onAdd={onAdd} items={cart} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
