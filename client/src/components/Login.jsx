import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import axios from 'axios'
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");

  const { showLogin, setShowLogin,backendUrl,setToken,setUser } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    try {
      if(state === 'Login'){
       const {data} = await axios.post(backendUrl + "/api/user/login",
          {email,password})
          if(data.success){
            setToken(data.token)
            setUser(data.user)
            localStorage.setItem("token",data.token)
            setShowLogin(false)
          }else{
            toast.error(data.message)
          }
      }else{
        const {data} = await axios.post(backendUrl + "/api/user/register",
          {name,email,password})
          if(data.success){
            setToken(data.token)
            setUser(data.user)
            localStorage.setItem("token",data.token)
            setShowLogin(false)
          }else{
            toast.error(data.message)
          }
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center
     items-center"
    >
      <motion.form onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white p-10 rounded-xl text-slate-500"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p>Welcome back! please sign in to continue</p>

        {state !== "Login" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
            <img src={assets.profile_icon} alt="" width={20} />
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.email_icon} alt="" width={20} />
          <input
            type="email"
            placeholder="Email id"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} alt="" width={20} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot Password?
        </p>
        <button className="bg-blue-600 w-full text-white py-2 rounded-full">
          {state === "Login" ? "login" : "Create Account"}
        </button>
        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't Have an Account?
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already Have an Account?
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}
        <img
          src={assets.cross_icon}
          onClick={() => setShowLogin(false)}
          alt=""
          className="absolute top-5 right-5 cursor-pointer"
        />
      </motion.form>
    </div>
  );
};

export default Login;
