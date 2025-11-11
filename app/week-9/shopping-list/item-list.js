"use client";

import Item from "./components/item";
import Button from "./components/button";
import { useState } from "react";


export default function ItemList({items, onItemSelect}) { 
    const [sortBy, setSortBy] = useState("name")

    // array for items that have been sorted
    const sortedItems = [...items].sort((a,b) => { 
    const aItem = a[sortBy].toString().toLowerCase();
    const bItem = b[sortBy].toString().toLowerCase();

    if (aItem > bItem) return 1;
    if (aItem < bItem) return -1;
    return 0;
    })

    // sort by name
    const handleNameSort = () => { 
        setSortBy("name");
    }   

    // sort by category
    const handleSortCategory = () => { 
        setSortBy("category");
    }   

    return ( 
        <div>
            <div className="flex items-center gap-3 mb-6">
                <span className="text-gray-400">Sort by:</span>
                <Button onClick={handleNameSort} buttonName="Name" isActive={sortBy === "name"}/>
                <Button onClick={handleSortCategory} buttonName="Category" isActive={sortBy === "category"}/>
            </div>

            <ul className="space-y-4">
            {sortedItems.map((item, index) => (
                <Item 
                    key={index} 
                    name={item.name} 
                    quantity={item.quantity} 
                    category={item.category} 
                    onSelect={() => onItemSelect(item.name)}
                />
            ))}
            </ul>
        </div>
    )
} 