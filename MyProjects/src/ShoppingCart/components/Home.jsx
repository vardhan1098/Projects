import React, { useContext } from "react";
import { productContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

function Home() {
  const { products ,loading} = useContext(productContext);
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };
  if(loading) return <div>Loading..</div>
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", gap: "10px", margin: "10px" }}
    >
      {products.map((product) => (
        <div
          onClick={()=>{handleDetails(product.id)}}
          key={product.id}
          style={{
            flex: "1 0 32.333%",
            alignContent: "center",
            cursor: "pointer",
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <img src={product.image} alt="" height={200} />
          <h3>{product.title}</h3>
          <p>$: {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
