"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
      setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <main className="min-h-screen bg-pink-50 p-8 text-gray-900 flex flex-col items-center">
    <h1 className="mb-6 text-center text-3xl font-bold text-pink-600">
         Shopping List 
    </h1>

    <NewItem onAddItem={handleAddItem} />

    <ItemList items={items} />
    </main>
  );

  
}