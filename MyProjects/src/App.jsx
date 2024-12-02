import React, { useState } from "react";
import Login from "./Projects/Login";
import Proj from "./Projects/Proj";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Projects/ProtectedRoute";
import Home from "./Projects/Home";
import Error from "./Projects/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Proj />} />
        <Route path="/login" element={<ProtectedRoute element={<Login />} />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
};

export default App;
