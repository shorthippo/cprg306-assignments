"use client";
import { useEffect, useState } from "react";
export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);
    async function loadMealIdeas() {
        const data = await fetchMealIdeas(ingredient);
        setMeals(data);
    }
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);
    return (
    <div>
        <h2>Meal Ideas for {ingredient}</h2>
        <ul>
            {meals.map((meal) => (
                <li key={meal.idMeal}>{meal.strMeal}</li>
            ))}
        </ul>
    </div>
);
}
export async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
}