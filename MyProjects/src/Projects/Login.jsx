import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = login;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    let storedUser = localStorage.getItem("sasi")

    if(!storedUser){
        alert("No user Found. pls do signup first..")
        return 
    }

    const parsedUser = JSON.parse(storedUser);
    if(email === parsedUser.email && password === parsedUser.password){
        alert("login successfully")
        navigate("/home")
    }else{
        alert("Invalid Credtinals")
    }

    setLogin({email:"",password:""})
    

  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <dl>
          <dt>email:</dt>
          <dd>
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={handleChange}
            />
          </dd>
          <dt>Password: </dt>
          <dd>
            <input
              type="text"
              name="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={handleChange}
            />
          </dd>
        </dl>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
