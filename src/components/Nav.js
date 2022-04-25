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
          <div data-testid="store-btn">Store</div>
        </Link>
        <Link to={'/shopping-cart'}>
          <div className="cart-link">
            Cart{' '}
            {quantity === 0 ? (
              <div className="no-bubble"></div>
            ) : (
              <div className="bubble">{quantity}</div>
            )}
          </div>
        </Link>
      </h3>
    </nav>
  );
};

export default Nav;
