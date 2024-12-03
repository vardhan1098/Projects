import React from "react";

export default function Modal({CloseModal}) {
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor:"purple",
        top: 0,
        right: 0,
        opacity:0.6,
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          border: "1px solid black",
        }}
      >
         <h2>Modal Example</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vitae
          ullam repellendus, veritatis ipsum tenetur quibusdam labore. Eos, iste
          nisi.
        </p>
        <button style={{position:"absolute", top:10,right:50,}} onClick={CloseModal}>X</button>
      </div>
    </div>
  );
}
