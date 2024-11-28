import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { productContext } from "./Context/Context";

function Dash() {
  const { products } = useContext(productContext);

  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      <h2>Welcome to ShopWise</h2>
      <div className="container">
        {products.map((product) => (
          <div
            key={product.id}
            className="container-card"
            onClick={() => handleDetails(product.id)}
          >
            <img src={product.image} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dash;
