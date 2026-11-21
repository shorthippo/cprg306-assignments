"use client";
import ItemList from "../../week-8/item-list";
import NewItem from "../../week-8/new-item";
import itemsData from "../../week-8/items.json";
import { useState } from "react";
import MealIdeas from "../../week-8/meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const { user } = useUserAuth();
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

    if (!user) return null;

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