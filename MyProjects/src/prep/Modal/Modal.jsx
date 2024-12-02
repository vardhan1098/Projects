import React from 'react';

const Modal = ({title = "Welcome",content = "my worlds",confirm = "saved"}) => {
    return (
        <div style={{position:"fixed",top:"0",right:"0",width:"100vw",height:'100vh',display:"flex",flexDirection:"column",justifyContent:"center",zIndex:"100",alignItems:"center",background:"gray"}}>
            <h1>Hello Modal</h1>
            <div  style={{backgroundColor:"white",color:"black",gap:"5px",border:"1px solid black",width:"300px",height:"200px",textAlign:"center"}}>
                <h2>Title : {title}</h2>
                <h3>Content : {content}</h3>
                <button onClick={confirm}>Save</button>
            </div>
        </div>
    );
};

export default Modal;