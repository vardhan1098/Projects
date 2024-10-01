import React from 'react';

const Toastify = ({message,delay}) => {
    return (
        <div style={{height:'80px',width:'150px',background:'black',color:'white'}}>
            <h2>{message === 'SUCCESS'?"Sent" : "Failed"}</h2>
        </div>
    );
};

export default Toastify;