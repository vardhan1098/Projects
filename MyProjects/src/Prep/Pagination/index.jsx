import React, { useState } from "react";

function Pagination() {
  const [data, setData] = useState(
    Array.from({ length: 100 }, (_, index) => index + 1)
  );
  const [currentPage, setCurrentPage] = useState(1); // first page landing
  let totalPages = 10; // total pages

  const CurrentPageItems = currentPage * totalPages;

  const totalItemsPerPage = Math.floor(data.length / totalPages); // perPageItems Visible..

  const handlePageNum = (page)=>{
    setCurrentPage(page)
  }

  const currentItems = data.slice(
    (currentPage - 1) * totalItemsPerPage,
    currentPage * totalItemsPerPage
  );
  return (
    <div className="pagination-container">
      <h2>Welcome to ShopWise Project..</h2>
      <div className="data-grid">
        {currentItems.map((num, idx) => (
          <div key={idx} className="data-item">
            <p>{num}</p>
          </div>
        ))}
      </div>
      {
        Array.from({length:totalPages},(_,index)=> index + 1 ).map((PageNum)=>(
            <button key={PageNum} onClick={()=>handlePageNum(PageNum)}>{PageNum}</button>
        ))
      }
    </div>
  );
}

export default Pagination;
