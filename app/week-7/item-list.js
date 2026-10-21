

"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div className="max-w-2xl">
      <h2 className="mb-4 text-2xl font-bold text-pink-600">
        Shopping Items
      </h2>

      <div className="mb-6 flex flex-wrap gap-3">
        <button
          onClick={() => setSortBy("name")}
          className="rounded bg-pink-200 px-4 py-2 hover:bg-pink-300"
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className="rounded bg-pink-200 px-4 py-2 hover:bg-pink-300"
        >
          Sort by Category
        </button>
      </div>

      {sortedItems.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
