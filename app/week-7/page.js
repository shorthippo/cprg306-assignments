"use client"

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemData from "./item.json";


export default function Page() {
  const [items, setItems] = useState(itemData);
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  }

  return (
    <main className="min-h-screen bg-emerald-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-emerald-800 mb-8">Shopping List</h1>
      <NewItem onAddItem={addItem} />
      <ItemList items={items}/>
    </main>
  );
}