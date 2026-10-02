"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center gap-4 bg-white border-2 border-[#cfe0d4] rounded-2xl shadow-lg shadow-[#5b8c6b]/20 px-6 py-4 w-fit">
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="w-10 h-10 rounded-full bg-[#5b8c6b] text-white text-xl font-bold hover:bg-[#487558] transition-colors disabled:bg-[#e3ece6] disabled:text-[#a3b8aa] disabled:cursor-not-allowed"
      >
        -
      </button>
      <span className="w-10 text-center text-2xl font-semibold text-[#2f5d46]">
        {quantity}
      </span>
      <button
        onClick={increment}
        disabled={quantity === 20}
        className="w-10 h-10 rounded-full bg-[#5b8c6b] text-white text-xl font-bold hover:bg-[#487558] transition-colors disabled:bg-[#e3ece6] disabled:text-[#a3b8aa] disabled:cursor-not-allowed"
      >
        +
      </button>
    </div>
  );
}