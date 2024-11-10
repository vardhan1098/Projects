import React, { createContext, useEffect, useState } from "react";

export const ContextUsers = createContext();

function Context({ children }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchingData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Network is Failed..");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  let values = {
    posts,
    loading,
    error,
  };
  return (
    <ContextUsers.Provider value={values}>{children}</ContextUsers.Provider>
  );
}

export default Context;
