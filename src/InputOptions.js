import React from 'react';
import './inputOptions.css';

const InputOptions = ({title,Icon,color}) => {
    return (
        <div className='inputOption'>
            <Icon style={{color:color}}/>
           <h4>{title}</h4> 
        </div>
    );
};

export default InputOptions;