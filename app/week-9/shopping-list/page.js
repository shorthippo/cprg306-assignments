"use client";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import itemsData from "./items.json";
import NewItem from "./new-item";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    function handleAddItem(newItem) {
         setItems((items) => [...items, newItem]);
    }
    function handleItemSelect(item) {
        setSelectedItemName(item.name);
    }
    if (!user) {
        return null;
    }

    return (
        <main>
            <h1 className="text-red-500 text-2xl font-bold mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
            <MealIdeas ingredient={selectedItemName} />
        </main>
    );
}