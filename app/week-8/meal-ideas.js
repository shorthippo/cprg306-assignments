"use client"

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const mealList = await fetchMealIdeas(ingredient);
        setMeals(mealList);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">Meal Ideas</h2>

            {!ingredient && (
                <p className="text-[#2f5a3d] font-semibold">Select an item to see meal ideas.</p>
            )}
            {ingredient && meals.length === 0 && (
                <p className="text-[#2f5a3d] font-semibold">No meal ideas found for {ingredient}.</p>
            )}
            {ingredient && meals.length > 0 && (
                <p className="text-[#2f5a3d] font-semibold mb-4">
                    Here are some meal ideas using {ingredient}:
                </p>
            )}

            <ul className="flex flex-col gap-2 items-center justify-center">
                {meals.map((meal) => (
                    <li
                        key={meal.idMeal}
                        className="flex items-center justify-center p-2 bg-[#a8d5b5] text-[#2f5a3d] font-bold w-75 text-center border-2 border-emerald-900/90 rounded-3xl"
                    >
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
}