import React, { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase-config";
import Modal from "./Modal";

const NavBar = ({ clearExpenses }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
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
      <header
        style={{
          display: "flex",
          position: "sticky",
          top: "5px",
          alignItems: "center",
          backgroundColor: "#F29F58",
          justifyContent: "space-around",
        }}
      >
        <h2>Expense +</h2>
        <nav style={{ display: "flex", listStyle: "none" }}>
          <ul style={{ display: "flex", listStyle: "none", padding: "5px" }}>
            <li style={{ padding: "5px" }}>Home</li>
            <li style={{ padding: "5px" }}>Expense</li>
            <li style={{ padding: "5px" }}>Contact</li>
          </ul>
        </nav>
        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={styles.userIcon}>{getUserInitial()}</span>
            <button style={styles.logoutButton} onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button
            style={styles.loginButton}
            onClick={handleOpen}
          >
            <FaUserAlt size={20} />
          </button>
        )}
      </header>
      {isModalOpen && <Modal onClose={handleClose} />}
    </>
  );
};

const styles = {
  loginButton: {
    padding: "2px 4px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  logoutButton: {
    padding: "2px 4px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  userIcon: {
    width: "35px",
    height: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "50%",
    fontSize: "20px",
  }
};

export default NavBar;
