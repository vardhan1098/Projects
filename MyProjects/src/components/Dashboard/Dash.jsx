import React, { useContext } from 'react';
import './Dash.css';
import { ContextDetails } from '../../Context';
import { useNavigate } from 'react-router-dom';

function Dash() {
  const {product,loading} = useContext(ContextDetails);
  const navigate = useNavigate();

  if(loading){
    return <div>Loading...</div>
  }

  const handleClick = (id) =>{
    navigate(`product/${id}`)
  }
  return (
    <>
    <h2 className='h2'>Products</h2>
    <div className='product-card'>
      {
        product.length > 0 && product.map((item,index)=>(
          <div  key={index} className='product-details' onClick={()=>handleClick(item.id)} >
            <h2>{item.title}</h2>
            <img src={item.image} alt='product-name'/>
          </div>
        ))
    
      }
    </div>
    </>
  )
}

export default Dash