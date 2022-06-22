import React from 'react';

const Item = ({ product, onAdd }) => {
  return (
    <div className="showroom-item">
      <img src={product.src} />
      <h4>{product.name}</h4>
      <h6>{product.description}</h6>
      <div>${product.price}</div>
      {product.inventory <= 0 ? (
        <button disabled>Add To Cart</button>
      ) : (
        <button data-testid="buy-button" onClick={() => onAdd(product)}>
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default Item;
