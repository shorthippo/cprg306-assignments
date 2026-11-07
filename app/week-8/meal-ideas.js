"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
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
    <div className="self-start w-100 m-2 bg-white text-black border-2 border-black rounded-2xl p-4">
      <h2 className="text-center text-2xl font-bold p-2">Meal Ideas</h2>
      {meals && meals.length > 0 && (
        <ul className="flex flex-col gap-4 p-2">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="border-2 border-black rounded p-2">
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}