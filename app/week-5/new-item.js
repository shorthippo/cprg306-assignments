"use client"
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  const [quantity, setQuantity] = useState(1);
  const handleSubmit = (Submission) => {
    Submission.preventDefault();
      const newItem = {
      name: name,
      category: category,
      quantity: quantity
    };
    console.log(newItem);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setCategory("Produce");
    setQuantity(1);
  }

  const increment = () => {
    if (quantity <20) {
    setQuantity(quantity + 1);}
    }
  const decrement = () => {
    if (quantity > 1) {
    setQuantity(quantity - 1);}
  }

return (
<div>
    <form onSubmit={handleSubmit}>

    <input type="text" value={name} onChange={(Submission) => 
        setName(Submission.target.value)} placeholder="Item Name" required />
    
    <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
    <p className="border border-gray-700 rounded-md px-7 py-3 text-2xl font-bold">{quantity}</p>
    <button type="button" onClick={decrement} disabled={quantity === 1} 
    className="bg-gray-300 rounded-md px-5 py-3 text-2xl font-bold">-</button>
    <button type="button" onClick={increment} disabled={quantity === 20}
    className="bg-blue-500 rounded-md px-5 py-3 text-2xl font-bold text-white">+</button>

        </div>
        <select value={category} onChange={(Submission) => 
        setCategory(Submission.target.value)} className="border-2 border-black bg-white text-black p-3 rounded-md">
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Bakery">Bakery</option>
      <option value="Meat">Meat</option>
      <option value="Frozen Foods">Frozen Foods</option>
      <option value="Canned Goods">Canned Goods</option>
      <option value="Beverages">Beverages</option>
      <option value="Snacks">Snacks</option>
      <option value="Household">Household</option>
      <option value="Other">Other</option>
      </select>
      </div>
      <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 rounded-md">
      NewItem
    </button>
    </form>
</div>
)
}
