import React, { useEffect, useState } from "react";

function Pagination() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage,setCurrentPage] = useState(1);
  let totalpages = 10;
  const totalItemsPerPage = Math.ceil(posts.length/totalpages);
  const currentItemsPerPage = posts.slice((currentPage - 1) * totalItemsPerPage, currentPage * totalItemsPerPage)



  const fetchingResponse = async () => {
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
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingResponse();
  }, []);

  const handlePageChange =(page) =>{
    setCurrentPage(page)
  }

  if(loading) return <div>Loading...</div>
  return (
    <div>
      {currentItemsPerPage.map((item) => (
        <ul key={item.id}>
          <li>{item.title}</li>
        </ul>
      ))}
      <>
      {
        Array.from({length:totalpages}, (_,index)=>index+1).map((pageNum)=>(
            <button onClick={()=>handlePageChange(pageNum)}>{pageNum}</button>
        ))
            
      }
      </>
    </div>
  );
}

export default Pagination;
