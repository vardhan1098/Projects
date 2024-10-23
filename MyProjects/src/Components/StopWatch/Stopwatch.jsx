import React, { useEffect, useRef, useState } from 'react'

function Stopwatch() {
    const [time,setTime] = useState(0);
    const [isRunning,setIsRunning] = useState(false);
    const intervalRef = useRef();

    useEffect(()=>{
       if(isRunning){
          intervalRef.current = setInterval(()=>{
            setTime(prevTime => prevTime + 10);
        },10)
       }else{
        clearInterval(intervalRef.current)
       }

       return ()=>clearInterval(intervalRef.current)
    },[isRunning])

// start.
const startTime =()=>{
    setIsRunning(true)
}

//stop.
const handleStop = () =>{
    setIsRunning(false)
}

const handleReset = () =>{
    setIsRunning(false);
    setTime(0)
}

const stopWatchTime = () =>{
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliSeconds = Math.floor((time % 1000)/10);
    return `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}:${milliSeconds.toString().padStart(2,'0')}`
}

  return (
    <div>
        <h1>Stop Watch : {stopWatchTime()}</h1>

        <button onClick={startTime}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Stopwatch