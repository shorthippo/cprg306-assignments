"use client";
import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);

    const increment = () => {
        if (count < 10) {
            setCount(count + 1);
        }
        else {
            alert("You reached the max value of the count");
        }
    };
    return (
        <div>
            <p> Count:{count} </p>
        <button
            onClick={increment} className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">
            Increment</button>
        </div>
    );
}