import React from 'react';
import Dash from './shopwise';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './shopwise/productDetails';
import Cart from './shopwise/Cart';
import Nav from './shopwise/components/NavBar/Nav';
import Product from './shopwise/pages/product/Product';
import Contact from './shopwise/pages/contact/contact';



function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Dash/>}/>
      <Route path='/details/:id' element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
