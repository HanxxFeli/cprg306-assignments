
"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json"; 


export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("")

  // handler to adds an item to items 
  const handleAddItem = (newItem) => { 
    setItems((currentItems) => [...currentItems, newItem])
  }

  // handler to clean item name and updated selected item
  const handleSelectItem = (item) => { 
    if (!item) { 
      return
    };

    console.log("This is the item", item)

    const cleanedName = item.split(",")[0].replace(/[^\w\s]/g, "").trim();

    // set cleanedName to selectedItemname
    setSelectedItemName(cleanedName);
  }

return (
  <main className="min-h-screen p-6">
    <div className="max-w-4xl mx-auto"> 
      <h1 className="text-2xl font-bold mb-6">Shopping List</h1>

      <div className="mb-8">
        <NewItem onAddItem={handleAddItem} />
      </div>

      <div className="md:flex md:space-x-6">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <ItemList 
            items={items}
            onItemSelect={handleSelectItem}
          />
        </div>

        <div className="md:w-1/2">
          <MealIdeas ingredient={selectedItemName}/>
        </div>
      </div>

    </div>  
  </main>
);
}