"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const handleItemSelect = (item) => {
        setSelectedItemName(
            item.name
                .split(",")[0]
                .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, "")
                .trim()
        );
    };

    return (
        <main>
            <div className="flex items-start">
                <div className="w-1/2">
                    <h1 className="text-center text-3xl font-extrabold p-2">
                        Shopping List
                    </h1>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-1/2 flex justify-center">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    )
}