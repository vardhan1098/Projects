import React, { useState } from 'react';
import Accordion from './Accordin';
import { items } from '../../data';
import Pagination from './Pagination/Pagination';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [countList, setCountList] = useState([]);

  const handleIncrement = () => {
    setCount((prevCount)=>{
        const newCount = prevCount + 1;
        return newCount;
    })

    setCountList((prevList)=> [...prevList, count + 1])
  };

  return (
    <div>
       <Accordion items={items}/>
       <Pagination/>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <ul>
        {countList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;
