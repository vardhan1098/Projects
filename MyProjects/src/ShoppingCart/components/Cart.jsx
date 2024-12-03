import React, { useContext, memo, useEffect } from "react";
import { productContext } from "../Context/Context";

const Cart = () => {
  const { cartItems, handleDelete, addToCart, handleRemove } =
    useContext(productContext);
  useEffect(() => {
    console.log("gettingCartItems", cartItems);
  }, [cartItems]);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      {cartItems.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {cartItems.map((cart, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid black",
                margin: "10px",
              }}
            >
              <img src={cart.image} width={100} alt="" />
              <h1>{cart.title}</h1>
              <p>{cart.quantity}</p>
              <>
                <button
                  disabled={cart.quantity === 1}
                  onClick={() => handleRemove(cart)}
                >
                  ➖
                </button>
                <button onClick={() => addToCart(cart)}>➕</button>
              </>
              <p>$:{cart.price}</p>
              <button
                onClick={() => {
                  handleDelete(cart.id);
                }}
              >
                ❌
              </button>
            </div>
          ))}
          <p>TotalPrice: ${totalPrice.toFixed(2)} </p>
        </div>
      )}
      {cartItems.length === 0 && <h1>No Products Found In The Cart..</h1>}
    </div>
  );
};

export default memo(Cart);
