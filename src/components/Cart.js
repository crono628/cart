import React from 'react';
import uniqid from 'uniqid';

const Cart = ({ items, onAdd, onRemove }) => {
  const subTotal = items.reduce((a, b) => {
    return a + b.price * b.qty;
  }, 0);

  const tax = subTotal * 0.09;

  const shippingCost = subTotal < 4000 ? 250 : 0;

  const totalCost = shippingCost + tax + subTotal;

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {items.length > 0 && (
        <div className="cart-confirm">
          <h5>(Free shipping with a subtotal over $4,000!)</h5>
          <div className="cart-math">
            <table>
              <thead>
                <tr>
                  <td>Subtotal:</td>
                  <td>${subTotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Tax:</td>
                  <td>${tax.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Shipping:</td>
                  <td>${shippingCost.toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Total:</th>
                  <th>${totalCost.toFixed(2)}</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="cart-display">
            {items.map((item) => (
              <div key={uniqid()} className="cart-item">
                <div className="cart-item-name">
                  {item.name}
                  <div>${item.price}</div>
                </div>
                <div className="cart-quantity">
                  <button
                    data-testid="remove-button"
                    onClick={() => onRemove(item)}
                  >
                    -
                  </button>
                  <div>{item.qty}</div>
                  {item.qty >= 3 ? (
                    <button disabled>+</button>
                  ) : (
                    <button
                      data-testid="add-button"
                      onClick={() => onAdd(item)}
                    >
                      +
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {items.length === 0 && <div>Cart is Empty</div>}
    </div>
  );
};

export default Cart;
