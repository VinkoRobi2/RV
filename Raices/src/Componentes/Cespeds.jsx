import React, { useState } from 'react';
import '../styles/Cespeds.css';

const Cesped = ({ texto, imagen }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="cesped-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imagen} alt="Césped" className="cesped-image" />
      <h1 className={`cesped-text ${hovered ? 'show' : ''}`}>{texto}</h1>
    </div>
  );
}

export default Cesped;
