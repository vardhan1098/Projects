import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dash from './components/Dashboard/Dash';
import Nav from './components/nav/nav';
import Product_Details from './components/Details/Product_Details';

const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Dash/>}/>
      <Route path='/product/:id' element={<Product_Details/>}/>
    </Routes>
    </>
  );
};

export default App;