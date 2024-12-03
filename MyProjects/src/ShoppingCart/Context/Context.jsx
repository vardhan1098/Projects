import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";

export const productContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const fetchingResponse = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch("https://fakestoreapi.com/products");
      if (!apiResponse.ok) {
        throw new Error("Network is Failed.");
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
    fetchingResponse();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback(
    (selectedProduct) => {
      const productExist = cartItems.find(
        (item) => item.id === selectedProduct.id
      );
      if (productExist) {
        setCartItems((prevCartItems) =>
          prevCartItems.map((item) =>
            item.id === selectedProduct.id
              ? {
                  ...productExist,
                  quantity: productExist.quantity + 1,
                  price: productExist.unitPrice * (productExist.quantity + 1),
                }
              : item
          )
        );
      } else {
        setCartItems((prevCartItems) => [
          ...prevCartItems,
          {
            ...selectedProduct,
            quantity: 1,
            unitPrice: selectedProduct.price,
            price: selectedProduct.price,
          },
        ]);
      }
    },
    [cartItems]
  );

  const handleDelete = useCallback((id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  }, []);

  const handleRemove = useCallback((selectedProduct) => {
    setCartItems((prevCartItems) => {
      const productExist = prevCartItems.find(
        (item) => item.id === selectedProduct.id
      );
      if (productExist) {
        if (productExist.quantity === 1) {
          return prevCartItems.filter((item) => item.id !== selectedProduct.id);
        }
        return prevCartItems.map((item) =>
          item.id === selectedProduct.id
            ? {
                ...item,
                quantity: item.quantity - 1,
                price: item.unitPrice * (item.quantity - 1),
              }
            : item
        );
      }
      return prevCartItems;
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      products,
      loading,
      error,
      fetchingResponse,
      addToCart,
      cartItems,
      setCartItems,
      handleDelete,
      handleRemove,
    }),
    [
      products,
      loading,
      error,
      handleRemove,
      fetchingResponse,
      addToCart,
      cartItems,
      handleDelete,
    ]
  );

  return (
    <productContext.Provider value={contextValue}>
      {children}
    </productContext.Provider>
  );
};

export default Context;
