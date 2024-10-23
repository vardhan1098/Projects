import React, { useEffect } from 'react';
import { useState } from 'react';
import Counter from './Counter';
import Stopwatch from './StopWatch/Stopwatch';

const AutoIncrement = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prevCount) =>{
                if(prevCount < 10){
                    return prevCount + 1
                }else{
                    clearInterval(interval)
                    return prevCount
                }
            })
        },1000)
        return ()=>clearInterval(interval)
    },[])

    return (
        <div>
            <Stopwatch/>
            <h1>Auto Increment : {count}</h1>
            <Counter/>
            
        </div>
    );
};

export default AutoIncrement;