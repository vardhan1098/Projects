import React, { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (number) => {
    let total = 0;
    console.log("Expensive calculation rendered...");
    for (let i = 0; i < 1000000; i++) {
      total += number;
    }
    return total;
  };

  const calculatedValue = useMemo(() => expensiveCalculation(3), [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <p>Expensive Calculation Result: {calculatedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseMemo;
