
"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
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

    if (name.trim() === "") {
      return;
    }

    const item = {
      id: crypto.randomUUID(),
      name: name.trim(),
      quantity: quantity,
      category: category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 w-full max-w-lg rounded-lg bg-white p-6 shadow-md"
    >
      <h2 className="mb-4 text-xl font-bold text-pink-600">
        Add New Item
      </h2>

      <label
        htmlFor="item-name"
        className="mb-2 block"
      >
        Item Name:
      </label>

      <input
        id="item-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        className="mb-4 w-full rounded border border-gray-300 p-2"
      />

      <div className="mb-4 flex items-end gap-4">

        <div className="shrink-0">
          <p className="mb-2">Quantity:</p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={decrement}
              className="rounded bg-pink-200 px-3 py-2"
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              type="button"
              onClick={increment}
              className="rounded bg-pink-200 px-3 py-2"
            >
              +
            </button>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <label
            htmlFor="item-category"
            className="mb-2 block"
          >
            Category:
          </label>

          <select
            id="item-category"
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
            className="w-full rounded border border-gray-300 p-2"
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
      </div>

      <button
        type="submit"
        className="w-full rounded bg-pink-500 p-2 font-bold text-white hover:bg-pink-600"
      >
        Add Item
      </button>
    </form>
  );
}
