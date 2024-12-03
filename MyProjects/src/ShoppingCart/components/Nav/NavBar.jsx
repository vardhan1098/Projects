import React, { useContext } from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';
import { productContext } from '../../Context/Context';

const NavBar = () => {
   const navigate = useNavigate();
   const {cartItems}= useContext(productContext)
  const handleOpenCart = () =>{
    navigate("/cart")
  }
  const totalItems = cartItems.reduce((acc,item) => acc + item.quantity,0)
    return (
        <header>
            <h2>ShopeCart</h2>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className='nav-btn'>
                <button className='cart-btn' onClick={handleOpenCart}>Cart {totalItems || 0}</button>
            </div>
        </header>
    );
};

export default NavBar;