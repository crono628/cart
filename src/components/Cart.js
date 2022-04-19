import React from 'react';
import uniqid from 'uniqid';

const Cart = ({ items, onAdd, onRemove }) => {
  const cartItems = items.map((item) => (
    <div key={uniqid()} className="cart-item">
      <div className="cart-item-name">
        {item.name}
        <div className="row">
          <button onClick={() => onRemove(item)}>-</button>
          <div>
            {item.qty} x ${item.price}
          </div>
          <button onClick={() => onAdd(item)}>+</button>
        </div>
      </div>

      <div> </div>
      <div>${item.price * item.qty}</div>
    </div>
  ));
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {items.length === 0 && <div>Cart is Empty</div>}
      {items.length > 0 && <div>{cartItems}</div>}
    </div>
  );
};

export default Cart;