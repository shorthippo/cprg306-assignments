"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  let itemsCopy = [...items];

  if (sortBy === "name") {
    itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    itemsCopy.sort((a, b) => a.category.localeCompare(b.category));
  }

return (
    <main>
      <section className="flex flex-row align-center justify-center gap-4 p-2">
        <button
          onClick={() => setSortBy("name")}
          className={`border-2 border-black p-4 rounded-sm ${sortBy === "name" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
        >Sort By Name</button>
        <button
          onClick={() => setSortBy("category")}
          className={`border-2 border-black p-4 rounded-sm ${sortBy === "category" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
        >Sort By Category</button>
      </section>
      <section className="flex flex-col align-center justify-center gap-4">
        {itemsCopy.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </section>
    </main>
 )
}