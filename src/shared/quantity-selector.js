import React from "react";

const QuantitySelector = ({ quantity, onChangeQuantity }) => {
  return (
    <div className="flex items-center gap-2 rounded-md border border-gray-300 p-2 bg-green-800 text-white">
      <button onClick={() => onChangeQuantity(quantity + 1)}>+</button>
      <span>{quantity}</span>
      <button onClick={() => onChangeQuantity(quantity - 1)}>-</button>
    </div>
  );
};

export default QuantitySelector;
