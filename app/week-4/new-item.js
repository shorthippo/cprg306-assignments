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
        <div className="flex items-center justify-center gap-4 p-8">

            <button 
            onClick={decrement}
            disabled={quantity ===1}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
            >
                -
            </button>
            <p className="text-2xl font-bold">{quantity}</p>

            <button 
            onClick={increment}
            disabled={quantity === 20}
            className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
            >
                +
            </button>
        </div>
    );
}