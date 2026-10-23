"use client"

import { useState } from "react";

import Item from "./item"


export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  let itemListCopy = [...items];

  if (sortBy === "name") {
    itemListCopy.sort((a,b) => a.name.localeCompare(b.name)) 
  }
  else {
     itemListCopy.sort((a,b) => a.category.localeCompare(b.category)) 
  }
  

  return (
    <div>
      <div className= "flex gap-2 mb-4">
        <button 
        className={`px-4 py-2 rounded-full font-bold transition-colors ${
            sortBy === "name" ? "bg-[#a8d5b5] text-[#2f5a3d]" : "bg-[#5b8c6b] text-white hover:bg-[#487558]"
        }`}
        onClick = {() => setSortBy("name") }>Sort by Name</button>

        <button 
        className={`px-4 py-2 rounded-full font-bold transition-colors ${
            sortBy === "category" ? "bg-[#a8d5b5] text-[#2f5a3d]" : "bg-[#5b8c6b] text-white hover:bg-[#487558]"
        }`}
        onClick = {() => setSortBy ("category")}>Sort by Category</button>
        </div>

    <ul className="flex flex-col gap-2 items-center justify-center">
         {itemListCopy.map((item) => (
            <Item key = {item.id}
             item = {item}
             />
            ))} 
        </ul>  
    </div>
  );
}