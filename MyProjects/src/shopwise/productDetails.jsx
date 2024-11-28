import React, { useContext, useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import { productContext } from './Context/Context';

const ProductDetails = () => {
    const [details,setDetails] =  useState({});
    const {id} = useParams();
    const {addToCart} = useContext(productContext)

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => setDetails(data))
        .catch(err => console.log(err.message))
    },[id])

    

  return (
    <div>
        <h2>Product Details..</h2>
        <div>
            <img src={details.image} width={400} alt="" />
           <h2>{details.title}</h2>
        
           <p>Price $: {details.price}</p>
           <div style={{display:"flex",gap:"10px"}}>
            <button onClick={()=>addToCart(details)}>Add to Cart</button>
            <button>BuyNow</button>
           </div>
        </div>
    </div>
  )
}

export default ProductDetails