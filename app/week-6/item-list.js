"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  const groupedItems = [...items]
  .sort((a,b) => a.name.localeCompare(b.name))
  .reduce((groups, item) => {
    if (!groups [item.category]) {
      groups[item.category] =[];
    }
    groups[item.category].push(item);
    return groups;
  }, {});

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-3">
        <button
          onClick={() => setSortBy("name")}
          className={`text-pink-900 font-semibold px-4 py-2 rounded-lg shadow-sm ${
            sortBy === "name"
              ? "bg-pink-300"
              : "bg-pink-200"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`text-pink-900 font-semibold px-4 py-2 rounded-lg  shadow-sm ${
            sortBy === "category"
              ? "bg-pink-300"
              : "bg-pink-200"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`text-pink-900 font-semibold px-4 py-2 rounded-lg shadow-sm ${
            sortBy === "group"
              ? "bg-pink-300"
              : "bg-pink-200"
          }`}
        >
          Sort by Group
        </button>
      </div>

      {sortBy === "group" ? (
  <div>
    {Object.keys(groupedItems)
      .sort()
      .map((category) => (
        <div key={category} className="mb-6">
          <h2 className="text-2xl font-bold text-pink-800 mb-3 capitalize">
            {category}
          </h2>

          <ul>
            {groupedItems[category].map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
          </ul>
        </div>
      ))}
  </div>
) : (
  <ul>
    {sortedItems.map((item) => (
      <Item
        key={item.id}
        name={item.name}
        quantity={item.quantity}
        category={item.category}
      />
    ))}
  </ul>
)}
    </div>
  );
}