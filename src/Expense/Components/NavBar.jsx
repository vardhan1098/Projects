import React, { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase-config";
import Modal from "./Modal";
import "../Components/Nav.css";

const NavBar = ({ clearExpenses }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleNavClose =()=>{
    setIsToggle(false)
  }

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      clearExpenses(); // Clear expenses on logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const getUserInitial = () => {
    if (user && user.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return null;
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-brand">
          <h2>Expense +</h2>
        </div>
        <div className="nav-icon" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`navbar-nav ${isToggle ? "show" : ""}`}>
           {isToggle && <button className="close" onClick={handleNavClose}>x</button>}
          <ul className="navbar-links">
            <li>Home</li>
            <li>Expense</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="navbar-auth">
          {user ? (
            <div className="auth-user">
              <span className="user-icon">{getUserInitial()}</span>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <button className="login-button" onClick={handleOpen}>
              <FaUserAlt size={20} />
            </button>
          )}
        </div>
      </header>
      {isModalOpen && <Modal onClose={handleClose} />}
    </>
  );
};

export default NavBar;
