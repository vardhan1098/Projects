import React,{useState} from 'react'

function Square({value,onSquareClick}) {
  return (
    <div>
        <button onClick={onSquareClick} style={{height:'40px',width:'40px',gap:'2px'}} >{value}</button>
    </div>
  )
}

export default Square