import React from "react";
import  { useState } from 'react';
function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function toggleCartStatus (){
    setIsInCart(!isInCart);
  };
  
  const liClassName = isInCart ? 'in-cart' : '';

  
  const buttonText = isInCart ? 'Remove From Cart' : 'Add to Cart';

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleCartStatus} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
