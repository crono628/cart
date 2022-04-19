import React from 'react';
import Item from './Item';
import uniqid from 'uniqid';

const Showroom = ({ onAdd, inventory }) => {
  const products = inventory.map((product) => {
    return <Item key={uniqid()} product={product} onAdd={onAdd} />;
  });

  return <div className="showroom">{products}</div>;
};

export default Showroom;
