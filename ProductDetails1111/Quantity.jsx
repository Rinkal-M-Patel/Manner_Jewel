import React, { useState } from "react";
import Style from "./Quantity.css";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity === 1) {
      alert("Negative quantity not allowed");
    } else {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="quantity-toggle">
      <button onClick={decrement}>&mdash;</button>
      <input type="text" value={quantity} readOnly />
      <button onClick={increment}>&#xff0b;</button>
    </div>
  );
};

export default Quantity;
