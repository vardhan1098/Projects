import React from 'react';
import './nav.css';
import { FaCartArrowDown, FaUser } from 'react-icons/fa';


function Nav() {
  return (
    <header>
        <h2>Ecom</h2>
        <nav>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Contact Us</li>
            </ul>
        </nav>
        <div className='btn-box'>
            <button>< FaCartArrowDown/></button>
            <button><FaUser/></button>
        </div>
    </header>
  )
}

export default Nav