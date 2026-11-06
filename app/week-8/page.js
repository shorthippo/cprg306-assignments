"use client"

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemData from "./item.json";


export default function Page() {
  const [items, setItems] = useState(itemData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  }

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/\p{Extended_Pictographic}/gu, "")
      .trim();
    setSelectedItemName(cleanedName);
  }

  return (
    <main className="min-h-screen bg-emerald-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-emerald-800 mb-8">Shopping List</h1>
      <div className="flex gap-8">
        <div>
          <NewItem onAddItem={addItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}