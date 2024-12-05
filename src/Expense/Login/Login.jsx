import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";

const Login = ({ onClose }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const { email, password } = login;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setError("Please fill in the Email.");
    } else if (password.trim() === "") {
      setError("Please fill in the password.");
    } else {
      try {
        const userDetails = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", userDetails.user);
        navigate("/exp"); // Redirect to the expense page
        onClose(); // Close the modal
      } catch (error) {
        setError("Error logging in: " + error.message);
        console.error("Error logging in:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Login</h2>
      {error && <p style={styles.error}>{error}</p>}
      <div style={styles.field}>
        <label style={styles.label} htmlFor="email">Email:</label>
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
        <label style={styles.label} htmlFor="password">Password:</label>
        <input
          style={styles.input}
          type="password"
          placeholder="Enter your Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" style={styles.button}>Login</button>
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
  error: {
    color: "red",
    marginTop: "10px",
  }
};

export default Login;
