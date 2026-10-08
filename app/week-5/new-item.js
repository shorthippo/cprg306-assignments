"use client";

import { useState } from "react";

export default function NewItem() {
    const [ quantity, setQuantity ] = useState(1);
    const [ name, setName ] = useState("");
    const [ category, setCategory ] = useState("produce");

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if ( quantity > 1 ) {
            setQuantity(quantity - 1 );
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name, quantity, category
        }
        console.log(item);

        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }
    return (
    <form onSubmit={handleSubmit} 
    className="p-4 max-w-md mx-auto">

        <input 
        type="text"
         value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Item name"
        required
        className="border p-2 rounded w-full"
        />
        <div className="flex items-center justify-between mt-4">
        <div className=" flex items-center gap-2">
           <button 
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="bg-pink-200 text-white px-4 py-2 rounded disabled:bg-gray-300"
            >
                -
            </button>

            <p className="text-2xl font-bold">{quantity}</p>

            <button 
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="bg-blue-300 text-white px-4 py-2 rounded disabled:bg-gray-300"
            >
                +
            </button>
            </div>
        <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="border p-2 rounded"
            >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                 <option value="meat">Meat</option>
                 <option value="frozen food">Frozen foods</option>
                 <option value="can goods">Can goods</option>
                 <option value="dry goods">Dry goods</option>
                 <option value="beverages">Beverages</option>
                 <option value="snacks">Snacks</option>
                 <option value="household">Household</option>
                 <option value="others">Others</option>
         </select> 
         </div>
         <button 
         type="submit"
         className="bg-amber-200 text-white px-4 py-2 rounded mt-4"
         >
            Add Item 
         </button>
        </form>
    );
}