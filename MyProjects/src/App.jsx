import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './ShoppingCart/components/Home';
import NavBar from './ShoppingCart/components/Nav/NavBar';
import Details from './ShoppingCart/components/Details';
import Cart from './ShoppingCart/components/Cart';

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/details/:id' element={<Details/>}/>
     <Route path='/cart' element={<Cart/>}/>
    </Routes>
  </>
  );
};

export default App;