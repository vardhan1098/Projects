import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../Context/Context";

function Details() {
  const { id } = useParams();
  const { products, fetchingResponse , addToCart} = useContext(productContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchingResponse();
  }, [fetchingResponse]);

  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find(
        (item) => item.id === parseInt(id, 10)
      );
      setProduct(selectedProduct);
    }
  }, [products, id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Hello Details Page</h2>
      <img src={product.image} alt={product.title} width={300} />
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button
        style={{
          padding: "5px 10px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={()=>{addToCart(product)}}
      >
        AddToCart
      </button>
    </div>
  );
}

export default Details;
