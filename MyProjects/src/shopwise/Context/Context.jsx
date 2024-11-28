import React, { createContext, useState, useEffect, useMemo } from "react";

export const productContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]); 

  const fetchingResponse = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch("https://fakestoreapi.com/products");
      if (!apiResponse.ok) {
        throw new Error("Network is Failed...");
      }
      const data = await apiResponse.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      if (Array.isArray(storedCart)) {
        setCartItems(storedCart);
      } else {
        setCartItems([]); // Default to an empty array if data is not an array
      }
    } catch (error) {
      setCartItems([]); // Handle JSON parsing errors
    }
    fetchingResponse();
  }, []);

  const addToCart = (selectedItem) => {
    const existingItems = cartItems.findIndex(
      (item) => item.id === selectedItem.id
    );

    if (existingItems >= 0) {
      const updatedItems = cartItems.map((item, idx) =>
        idx === existingItems ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
      localStorage.setItem("cart",JSON.stringify(updatedItems))
    }else{
        const updatedItems = [...cartItems,{...selectedItem,quantity:1}];
        setCartItems(updatedItems)
        localStorage.setItem("cart",JSON.stringify(updatedItems))
    }
  };

  const deleteCartItem = (id) => {
    let deleteItem = cartItems.filter((item) => item.id !== id);
    setCartItems(deleteItem);
    localStorage.setItem("cart", JSON.stringify(deleteItem));
  };

  const updateCartItemQuantity = (id, change) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean); // Remove any `null` items (where quantity reaches 0)
  
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  
  const calculateTotalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  },[cartItems]);

  const calcuateLengthItems =() =>{
    return  cartItems.reduce((total,item)=> total + item.quantity, 0 )
  }

  const values = {
    products,
    loading,
    error,
    addToCart,
    cartItems,
    setCartItems,
    deleteCartItem,
    calculateTotalPrice,
    calcuateLengthItems,
    updateCartItemQuantity 
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default Context;
