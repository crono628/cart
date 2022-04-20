import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ quantity }) => {
  return (
    <nav className="nav-bar">
      <h1 className="nav-left">
        <Link to={'/'}>
          <div>Nobody Beats the Wiz</div>
        </Link>
      </h1>
      <h3 className="nav-right">
        <Link to={'/showroom'}>
          <div>Store</div>
        </Link>
        <Link to={'/cart'}>
          <div className="cart">Cart {quantity}</div>
        </Link>
      </h3>
    </nav>
  );
};

export default Nav;
