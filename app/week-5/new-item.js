"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      alert("Please enter an item.");
      return;
    }
    let item = { name, quantity, category };
    console.log(item);
    alert(`Item added: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  const decrement = () => {
    if (quantity > 1 && quantity <= 20) {
        setQuantity(quantity - 1);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center bg-white p-4 rounded">
      <input
        className="border-1 border-black rounded p-2"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Item Name"
        required
      />

      <div className={"flex gap-2 justify-center items-center bg-white w-40 h-15 rounded"}>
      <p className="text-black font-extrabold p-2.5 border-1 border-black rounded fill-black">{quantity}</p>
      <button
        type="button"
        onClick={decrement} 
        disabled={quantity === 1}
        className="bg-blue-600 p-3 rounded hover:bg-slate-600 text-white active:bg-red-500"
      > - </button>
      <button
        type="button"
        onClick={increment}
        disabled={quantity == 20}
        className="bg-blue-600 p-3 rounded hover:bg-slate-600 text-white active:bg-red-500"
      > + </button>
    </div>

      <select
        className="border-1 border-gray-300 rounded p-2"
        value={category}
        onChange={(event) => setCategory(event.target.value)}>
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

      <button
      type="submit"
        className="bg-blue-600 p-3 rounded hover:bg-slate-600 text-white active:bg-red-500"
        onClick={handleSubmit}> Add Item </button>
    </form>
  );
}