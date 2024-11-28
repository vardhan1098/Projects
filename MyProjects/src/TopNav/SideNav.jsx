import React, { useState } from "react";
import "./index.css";
import Modal from "../components/Modal/Modal";

const SideNav = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [popUp,setPopUp] = useState(false);

    const handleToggle = ()=>{
        setIsOpen(!isOpen)
    }

    const handleModal = ()=>{
      setPopUp(!popUp)
    }

    const closeModal =()=>{
      setPopUp(false)
    }
  return (
    <>
    <header>
      <h3>ClickMart</h3>
      <div className="side-nav" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={isOpen?"open":""}>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </nav>
      <div>
        <button onClick={handleModal}>Login</button>
      </div>
    </header>
    {
      popUp && (
        <Modal close={closeModal}/>
      )
    }
    </>
  );
};

export default SideNav;
