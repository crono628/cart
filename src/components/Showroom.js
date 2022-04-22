import React from 'react';
import Item from './Item';
import uniqid from 'uniqid';

const Showroom = ({ onAdd, inventory }) => {
  const products = inventory.map((product) => {
    return <Item key={uniqid()} product={product} onAdd={onAdd} />;
  });

  return (
    <div className="showroom-title">
      <h1>Products</h1>
      <div className="showroom">{products}</div>
    </div>
  );
};

export default Showroom;
