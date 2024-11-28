import React, { useContext } from "react";
import { productContext } from "./Context/Context";

function Cart() {
  const {
    cartItems,
    deleteCartItem,
    calculateTotalPrice,
    updateCartItemQuantity,
  } = useContext(productContext);
  console.log(cartItems);

  return (
    <div>
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cartItems.map((cart, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              marginBottom: "5px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <h3>{cart.title}</h3>
            <div>
              <p>Quantity : {cart.quantity}</p>
              <button
                style={{ border: "1px solid black" }}
                disabled={cart.quantity === 1}
                onClick={() => updateCartItemQuantity(cart.id, -1)}
              >
                -
              </button>
              <button
                style={{ border: "1px solid black" }}
                onClick={() => updateCartItemQuantity(cart.id, 1)}
              >
                +
              </button>
            </div>

            <p>Price: ${cart.quantity * cart.price}</p>
            <button onClick={() => deleteCartItem(cart.id)}>❌</button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div>
          <p>Total Price : ${calculateTotalPrice.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
