import React, { useRef, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStartPause = () =>{
    if(!isRunning){
        intervalRef.current = setInterval(()=>{
            setTime((prevTime)=> prevTime + 1)
        },100)
        setIsRunning(true)
    }else{
        clearInterval(intervalRef.current);
        setIsRunning(false)
    }
  }
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) =>{
    const hours = Math.floor(seconds/3600)

  }
  return (
    <div>
      <h2>StopWatch : {time} Seconds </h2>
      <button onClick={handleStartPause}>
       {isRunning ? "pause":"start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default StopWatch;
