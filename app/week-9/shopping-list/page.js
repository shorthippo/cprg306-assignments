"use client"

import { useState } from "react";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemData from "./item.json";


export default function Page() {
  const { user } = useUserAuth();
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

  if (!user) {
    return (
      <main className="min-h-screen bg-emerald-100 flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold text-emerald-800 mb-8">Shopping List</h1>
        <p className="text-emerald-900 mb-4">You must be logged in to view this page.</p>
        <Link href="/week-9" className="bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800">
          Go to Login
        </Link>
      </main>
    );
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