import React, { useState } from "react";
import SignUp from "../Login/SignUp";
import Login from "../Login/Login";

const Modal = ({ onClose }) => {
  const [showSignUp, setShowSignUp] = useState(true);

  const toggleForm = () => {
    setShowSignUp((prev) => !prev);
  };

  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        top: "0",
        right: "0",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        display: "flex",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "20px",
          borderRadius: "10px",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            border: "none",
            background: "none",
            cursor: "pointer",
            fontSize: "20px",
          }}
          onClick={onClose}
        >
          &times;
        </button>
        {showSignUp ? (
          <SignUp onClose={onClose} />
        ) : (
          <Login onClose={onClose} />
        )}
        <button
          onClick={toggleForm}
          style={{
            marginTop: "10px",
            padding: "7px 10px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {showSignUp ? "Switch to Login" : "Switch to Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Modal;
