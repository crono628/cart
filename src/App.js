import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import data from './components/data';
import Cart from './components/Cart';
import Nav from './components/Nav';
import Showroom from './components/Showroom';
import Welcome from './components/Welcome';

const App = () => {
  const [cart, setCart] = useState([]);
  const [available, setAvailable] = useState(data);

  function deductInventory(product) {
    let copy = [...available];
    let found = copy.find((item) => item.id === product.id);
    if (found.inventory > 0) {
      found.inventory -= 1;
    }
    setAvailable(copy);
  }

  function addInventory(product) {
    let copy = [...available];
    let found = copy.find((item) => item.id === product.id);
    if (found.inventory < 3) {
      found.inventory += 1;
    }
    setAvailable(copy);
  }

  const onAdd = (product) => {
    deductInventory(product);
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
    console.log(available);
  };

  const onRemove = (product) => {
    addInventory(product);
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

    console.log(available);
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
            element={<Showroom inventory={available} onAdd={onAdd} />}
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
