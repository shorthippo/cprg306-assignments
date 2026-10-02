"use client";

import { useState } from "react";

export default function NewItem() {
  let [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity <= 20) {
        setQuantity(quantity - 1);
    }
  }

  return (
    <div className={"flex gap-2 justify-center items-center bg-white w-40 h-15 rounded"}>
      <p className="text-black font-extrabold p-2.5 border-1 border-black rounded fill-black">{quantity}</p>
      <button 
        onClick={decrement} 
        disabled={quantity == 20}
        disabled={quantity == 1}
        className="bg-blue-600 p-3 rounded hover:bg-slate-600 text-white active:bg-red-500"
      > - </button>
      <button
        onClick={increment}
        disabled={quantity == 20}
        className="bg-blue-600 p-3 rounded hover:bg-slate-600 text-white active:bg-red-500"
      > + </button>
    </div>
  );
}