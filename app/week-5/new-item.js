"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = { name, quantity, category };
    console.log(item);

    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 max-w-md mx-auto bg-white border-2 border-[#cfe0d4] rounded-2xl shadow-lg shadow-[#5b8c6b]/20"
    >
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Item name"
        required
        className="border-2 border-[#cfe0d4] p-2 rounded-lg w-full text-[#2f5d46] placeholder:text-[#a3b8aa] focus:outline-none focus:border-[#5b8c6b]"
      />

      <div className="flex items-center justify-between gap-4 mt-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="bg-[#5b8c6b] text-white px-4 py-2 rounded-full font-bold hover:bg-[#487558] transition-colors disabled:bg-[#e3ece6] disabled:text-[#a3b8aa] disabled:cursor-not-allowed"
          >
            -
          </button>

          <p className="w-8 text-center text-2xl font-bold text-[#2f5d46]">
            {quantity}
          </p>

          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="bg-[#5b8c6b] text-white px-4 py-2 rounded-full font-bold hover:bg-[#487558] transition-colors disabled:bg-[#e3ece6] disabled:text-[#a3b8aa] disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="border-2 border-[#cfe0d4] p-2 rounded-lg bg-white text-[#2f5d46] focus:outline-none focus:border-[#5b8c6b]"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-[#5b8c6b] text-white px-4 py-2 rounded-full font-semibold mt-4 hover:bg-[#487558] transition-colors"
      > Add Item
      </button>
    </form>
  );
}