import React, { useEffect, useState } from "react";

function Data() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore,setHasMore] = useState(false)

  const fetchingData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?page=${page}`
      );
      if (!response.ok) {
        throw new Error("Network is Failed..");
      }
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts,...data])
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // INFINITE SCROLL
  const handleScroll = () => {
    if (window.innerHeight + window.scrollX > document.body.offsetHeight && !loading && hasMore) {
      setPage(page + 1);
    }
  };

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener('scroll',handleScroll)
  },[loading,hasMore])
 

  useEffect(() => {
    fetchingData(page);
  }, [page]);

  return (
    <div>
      {posts.map((post, idx) => (
        <li key={idx}>
          {post.id} & {post.title}
        </li>
      ))}
    </div>
  );
}

export default Data;
