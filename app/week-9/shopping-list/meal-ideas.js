"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch meal ideas");
  }

  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient}) {
    const [meals, setMeals] = useState([]);
useEffect(() => {
    let cancelled = false;

    async function loadMealIdeas() {
        if (!ingredient) {
            setMeals ([]);
            return;
        }
        try {
            const mealIdeas = await fetchMealIdeas(ingredient);

            if (!cancelled) {
                setMeals(mealIdeas);
            }
 } catch (error) {
    console.error("Error fetching meal ideas:",error);
    if (!cancelled) {
        setMeals([]);
    }
 } 
    }
loadMealIdeas();
return () => {
    cancelled = true;
};
}, [ingredient]);



return (
  <div className="p-4">
    <h2 className="text-xl mb-2">
      Meal ideas (select an item)
    </h2>

    {ingredient && (
      <p className="mb-4">
        Ideas using: {ingredient}
      </p>
    )}

    <ul className="list-disc pl-5">
      {meals.map((meal) => (
        <li key={meal.idMeal} className="mb-2">
          {meal.strMeal}
        </li>
      ))}
    </ul>
  </div>
);
}