import React from 'react';
import './Card.css'; // Let's create a dedicated CSS for the Card styling

function Card({ name, price, brand }) {
  return (
    <div className="product-card">
      <h2 className="product-name">{name}</h2>
      <p className="product-price">{price}</p>
      <p className="product-brand">{brand}</p>
    </div>
  );
}

export default Card;
