import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const ContextDetails = createContext();

const Context = ({children}) => {

    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const fetchingData = async() =>{
        setLoading(true)
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if(!response.ok){
                throw new Error('Network is Failed..')
            }
            const data = await response.json();
            setProduct(data)
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchingData();
    },[])

    let values = {
        product,
        loading
    }
    return (
        <ContextDetails.Provider value={{...values}}>
            {children}
        </ContextDetails.Provider>
    );
};

export default Context;