// src/components/Card.js
import React from 'react';
import '../App.css';

function Card({ card }) {
  return (
    <div className="card-container">
      <img src={card.image} alt={card.code} />
    </div>
  );
}

export default Card;
