import React, { useContext, useState } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { productContext } from "../../Context/Context";

const Nav = () => {
  const navigate = useNavigate();
  const { calcuateLengthItems } = useContext(productContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCart = () => {
    navigate("/cart");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <h2>ShopWise</h2>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={menuOpen ? "nav open" : "nav"}>
        <ul>
          <Link to="/" onClick={toggleMenu}>
            <li>Home</li>
          </Link>
          <Link to="/product" onClick={toggleMenu}>
            <li>Product</li>
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <div className="btn">
        <button onClick={handleCart}>Cart {calcuateLengthItems() || 0}</button>
      </div>
    </header>
  );
};

export default Nav;
