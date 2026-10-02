"use client"
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState("1");
  const increment = () => {
    if (quantity <20) {
    setQuantity(quantity + 1);}
    }
  const decrement = () => {
    if (quantity > 1) {
    setQuantity(quantity - 1);}
  }
}
return (
    <div>
    <p>{quantity}</p>
    <button onClick={decrement} disabled={quantity === 1} 
    className="bg-blue-400 hover:bg-blue-600 disabled:bg-yellow-900 rounded m-4 p-4">-</button>
    <button onClick={increment} disabled={quantity === 20}
    className="bg-blue-400 hover:bg-blue-600 disabled:bg-yellow-900 rounded m-4 p-4">+</button>
    </div>
)