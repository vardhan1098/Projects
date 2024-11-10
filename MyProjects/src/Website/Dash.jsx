import React from 'react'
import './Dash.css';

function Dash() {
  return (
    <div className='container'>
        <div className='left_side'>
            <h2>Hello Left</h2>
        </div>
        <div className='center'>
            <h3>Welcome to Center World</h3>
        </div>
        <div className={`right_side`}>
            <h3>Welcome to Right</h3>
            <div className={`right_under top`}>
            <h4>Welcome to Box</h4>
            </div>
        </div>
    </div>
  )
}

export default Dash