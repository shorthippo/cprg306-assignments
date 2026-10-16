"use client";
import Item from "./item";
import { useState } from "react";
import Items from "./items.json";

export default function ItemList() {
const [sortBy, setSortBy] = useState("name");
const sortedItems = [...Items].sort((a, b) => {
    if (sortBy === "name") {
        return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
    } else if (sortBy === "quantity") {
        return b.quantity - a.quantity;
    }
    return 0;
  });
  return (
  <div>
    <button onClick={() => setSortBy("name")}
    className= {sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200 text-black" }>
    Sort by Name</button>
    <button onClick={() => setSortBy("category")} className={sortBy === "category" ? "bg-blue-950 text-white" : "bg-gray-200 text-black"}>
    Sort by Category</button>
    <button onClick={() => setSortBy("category list")} className={sortBy === "category list" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}>
    Sort by Category List</button>

    {sortedItems.map((item) => (
        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
    ))}
    {Object.keys(sortedItems).sort((a, b) => a.localeCompare(b)).map((category) => (
      <div key={category}>
        <h1 className="capitalize">{category}</h1>
        <ul>
          {sortedItems.filter((item) => item.category === category).map((item) => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
          ))}
        </ul>
      </div>
    ))}

  </div>
  );
}