import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";

const SignUp = () => {
  const [register, setRegister] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { userName, email, password } = register;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userName.trim() === "") {
      alert("Please fill in the UserName.");
    } else if (email.trim() === "") {
      alert("Please fill in the Email.");
    } else if (password.length < 6 || password.trim() === "") {
      alert("Password should be at least 6 characters long.");
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/login"); // Redirect to login page
      } catch (error) {
        console.error("Error signing up:", error);
      }
      console.log("User details:", register);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Sign Up</h2>
      <div style={styles.field}>
        <label style={styles.label} htmlFor="userName">
          Full Name:
        </label>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter your UserName"
          name="userName"
          value={userName}
          onChange={handleChange}
        />
      </div>
      <div style={styles.field}>
        <label style={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          style={styles.input}
          type="email"
          placeholder="Enter your Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div style={styles.field}>
        <label style={styles.label} htmlFor="password">
          Password:
        </label>
        <input
          style={styles.input}
          type="password"
          placeholder="Enter your Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" style={styles.button}>
        Sign Up
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "0 auto",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
  },
  field: {
    marginBottom: "15px",
    width: "100%",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  toggleText: {
    marginTop: "10px",
    color: "#555",
  },
  toggleLink: {
    color: "#007bff",
    cursor: "pointer",
  },
};

export default SignUp;
