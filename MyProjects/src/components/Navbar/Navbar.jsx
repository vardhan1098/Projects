import React, { useState } from 'react';
import './Navbar.css';
import { motion } from "framer-motion";
import { CiUser } from 'react-icons/ci';
import { RiMenu5Fill } from 'react-icons/ri';
import { IoCloseSharp } from 'react-icons/io5';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
   <header className='header'>
    <h3>Sasi</h3>
    <div className='menu-icon' onClick={toggleOpen}>
      {isOpen ? <IoCloseSharp size="40px" color='white'/> : <RiMenu5Fill size="40px" color='white'/> }
    </div>
    <motion.nav 
      initial={{y:-250}}
      animate={{y: -0}}
      transition={{delay:0.3, type: 'spring', stiffness:30}}
      className={`nav ${isOpen ? 'open' : ''}`}
    >
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </motion.nav>
    <motion.div
      initial={{y:-250}}
      animate={{y:-0}}
      transition={{delay:0.3, type:'spring', stiffness:30}}
    >
      <button><CiUser  size='30px' enableBackground={true}/></button>
    </motion.div>
   </header>
  );
}

export default Navbar;
