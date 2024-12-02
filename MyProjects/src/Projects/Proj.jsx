import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Proj() {
  const [details, setDetails] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const { userName, email, password } = details;
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() === "") {
      alert("please Enter UserName..");
    } else if (password.trim() === "") {
      alert("please enter a password.");
    } else if (email.trim() === "") {
      alert("Please enter a Email");
    } else {
      console.log(details);
      let signup = JSON.stringify(details)
      console.log("getting signup.",signup);
      
      localStorage.setItem("sasi",signup);
     navigate("/login")  
      setDetails({
        userName: "",
        password: "",
        email: "",
      });
    }
  };



  return (
    <div>
      <h2>Welcome To World..</h2>
      <form onSubmit={handleSubmit}>
        <dl>
          <dt>UserName:</dt>
          <dd>
            <input
              type="text"
              placeholder="Enter a UserName.."
              name="userName"
              onChange={handleChange}
              value={userName}
            />
          </dd>
          <dt>Email:</dt>
          <dd>
            <input
              type="email"
              name="email"
              placeholder="Enter a Email"
              value={email}
              onChange={handleChange}
            />
          </dd>
          <dt>Password:</dt>
          <dd>
            <input
              type="password"
              name="password"
              placeholder="Enter a Password."
              value={password}
              onChange={handleChange}
            />
          </dd>
        </dl>
        <button >Signup</button>
      </form>
    </div>
  );
}

export default Proj;
