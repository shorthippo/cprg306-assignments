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
<div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
    <div className="w-full max-w-xl bg-white border-2 border-pink-200 rounded-2xl shadow-lg p-6">

      <form onSubmit={handleSubmit}>

    <input type="text" value={name} onChange={(Submission) => 
        setName(Submission.target.value)} placeholder="Item Name" required 
        className="w-full box-border border-2 border-pink-200 bg-pink-50 rounded-lg p-3 text-lg text-gray-800 outline-none focus:border-red-300 mb-5"/>
    
        <div className="flex items-center justify-between gap-3 mb-5">

          <div className="flex items-center gap-2 shrink-0">

    <p className="border-2 border-pink-200 bg-pink-50 rounded-lg px-4 py-3 text-xl font-bold text-red-500">{quantity}</p>

    <button type="button" onClick={decrement} disabled={quantity === 1} 
    className="bg-pink-200 hover:bg-pink-300 disabled:opacity-50 text-red-600 rounded-lg px-4 py-3 text-xl font-bold">-</button>

    <button type="button" onClick={increment} disabled={quantity === 20}
    className="bg-red-400 hover:bg-red-500 disabled:opacity-50 text-white rounded-lg px-4 py-3 text-xl font-bold">+</button>

        </div>
        <select value={category} onChange={(Submission) => 
        setCategory(Submission.target.value)} className="w-48 min-w-0 border-2 border-pink-200 bg-white text-gray-700 p-3 rounded-lg focus:border-red-300 outline-none">

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
      <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-5 rounded-lg shadow-sm transition-colors">
      NewItem
    </button>
    </form>
    </div>
</div>
)
}
