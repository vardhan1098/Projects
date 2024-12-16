import React from "react";
import './Nav.css';

const NavBar = () => {
  return (
    <header>
      <h2>ShopWise</h2>
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div>
        <button>Cart</button>
      </div>
    </header>
  );
};

export default NavBar;
