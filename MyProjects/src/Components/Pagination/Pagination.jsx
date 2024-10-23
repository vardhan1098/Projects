import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // pagination logic..
  const [currentIndex, setCurrentIndex] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 100;
  const totalpages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentIndex - 1) * itemsPerPage;
  const currentItemsList = posts.slice(0, startIndex + itemsPerPage);

  const loadMore = () =>{
    if(currentIndex < totalpages){
        setCurrentIndex(currentIndex + 1)
    }
  }

  const fetchingData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Network is Failed");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div>
      <h1>Pagination</h1>
      { currentItemsList.length > 0 ?
    currentItemsList.map((item, idx) => (
        <div key={idx}>
          <li>{item.title}</li>
        </div>
      )): (<div>No Posts Left</div>)}
      <div>
        <button 
        onClick={loadMore}
        disabled ={currentIndex === totalpages}
        >{currentIndex < totalpages ? 'Load More' : "No Posts Left.."}</button>
      </div>
    </div>
  );
};

export default Pagination;
