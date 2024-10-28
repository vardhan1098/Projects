import React, { useState } from 'react';

const Calculator = () => {
    const [calValue,setCalValue] = useState(0);
    const [storedValue,setStoredValue] = useState(null);
    const [operation,setOperation] = useState(null);

    const handleNumberValue = (num) =>{
        setCalValue((prev)=>prev === 0 ? num : prev * 10 + num)
    }

    const handleOperationValue = (op)=>{
        setStoredValue(calValue);
        setCalValue(0);
        setOperation(op);
    }

    const calculatedValue =()=>{
        if(operation && storedValue !== 0 && calValue !== 0){
            let result;
            if(operation === "+"){
                result = storedValue + calValue;
            }else if(operation === '-'){
                result = storedValue - calValue;
            }else if(operation === '*'){
                result = storedValue * calValue;
            }
            setCalValue(result);
            setStoredValue(null);
            setOperation(null)
        }
    }
    return (
        <div>
            <p>{calValue || 0}</p>
            <div>
                <button onClick={()=>handleOperationValue('+')}>+</button>
                <button onClick={()=>handleOperationValue('-')}>-</button>
                <button onClick={()=>handleOperationValue('*')}>*</button>
                <button onClick={calculatedValue}> = </button>
            </div>
            <div>
                <button onClick={()=>handleNumberValue('7')}>7</button>
                <button onClick={()=>handleNumberValue('8')}>8</button>
                <button onClick={()=>handleNumberValue('9')}>9</button>    
            </div> 
            <div>
                <button onClick={()=>handleNumberValue('4')}>4</button>
                <button onClick={()=>handleNumberValue('5')}>5</button>
                <button onClick={()=>handleNumberValue('6')}>6</button>
            </div>
            <div>
                <button onClick={()=>handleNumberValue('3')}>3</button>
                <button onClick={()=>handleNumberValue('2')}>2</button>
                <button onClick={()=>handleNumberValue('1')}>1</button>
            </div>
        </div>
    );
};

export default Calculator;