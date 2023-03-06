import React from "react";

const Pizza = ({ pizza }) => {
  const imagePath = `/images/${pizza.image}`;
  return (
    <div>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <ul>
        {pizza.sizes.map((variant, index) => (
          <li key={index}>{variant}</li>
        ))}
      </ul>
      <ul>
        {pizza.prices.map((price, index) => (
          <li key={index}>${price}</li>
        ))}
      </ul>
      <img src={imagePath} alt={pizza.name} />
    </div>
  );
};

export default Pizza;
