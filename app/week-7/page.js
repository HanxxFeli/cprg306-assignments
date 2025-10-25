
"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";


export default function Page() {
  const [items, setItems] = useState(itemsData)
  

  // handler to adds an item to items 
  const handleAddItem = (newItem) => { 
    setItems((currentItems) => [...currentItems, newItem])
  }

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Shopping List</h1>

        <div className="space-y-8">
          <NewItem onAddItem={handleAddItem}/>

          <ItemList items={items}/>
        </div>

      </div>  
    </main>
  );
}