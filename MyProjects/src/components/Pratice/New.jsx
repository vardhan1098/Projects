import React, { useMemo } from 'react';

const New = () => {
    const [count, setcount] = React.useState(1);
    const [fact, setFact] = React.useState(5)

    let doubled = useMemo(()=>(Factorial(fact)),[fact])


    return (
        <div>
           <h1>Count : {count}</h1>
           <h3>Factorial : {doubled}</h3>
           <button onClick={()=> setcount(prev => prev + 1)}>Increment</button> 
           <button onClick={()=>setFact(prev => prev + 1 )}>DoubleIncrment</button>
        </div>
    );
};

const Factorial = (num) =>{
    let result = 1;
    for(let i = num ; i >= 1 ; i--){
       result = result * i;
    }
    console.log('Factroial is Calling..');
    
    return result;
}


export default New;