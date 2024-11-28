import React from 'react';
import './Cards.css';
import person from '../assets/per.jpg';

function CardInput() {
  return (
    <div className='cards-contain'>
        <img src={person} alt="kgn" />
        <h2>Sasi Vardhan reddy</h2>
        <p>Key Skills : React js, Javascript</p>
        <span>🔁🔂◀️🔽⏩</span>
        <button>Contact</button>
    </div>
  )
}

export default CardInput