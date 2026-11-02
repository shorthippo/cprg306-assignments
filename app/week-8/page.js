"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  
  const handleAddItem = (item) => {
      setItems((prevItems) => [...prevItems, item]);
  };


const handleItemSelect = (item) => {
  const cleanedName = item.name
    .split(",")[0]
    .replace(
      /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu,
      ""
    )
    .trim();

  setSelectedItemName(cleanedName);
};

  return (
    <main className="min-h-screen bg-pink-50 p-8 text-gray-900 flex flex-col items-center">
    <h1 className="mb-6 text-center text-3xl font-bold text-pink-600">
         Shopping List 
    </h1>
<div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="w-full md:w-1/2 max-w-xl">
          <NewItem onAddItem={handleAddItem} />

          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
          />
        </div>

        <div className="w-full md:w-1/2 max-w-xl">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}