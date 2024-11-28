import React from "react";
import "./modal.css";

function Modal({close}) {
  return (
    <div className="app-overlay">
         <button className="btn-right" onClick={close} >X</button>
      <div className="app-head">
        <h3>Login Page</h3>
        <form action="">
            <label htmlFor="emai">Email:</label>
            <input type="text" placeholder="enter a Email." /> <br/>
            <label htmlFor="password">Password:</label>
            <input type="text" placeholder="Enter a Password.." />  <br/>
            <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
