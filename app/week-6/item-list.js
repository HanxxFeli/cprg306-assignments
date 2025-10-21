"use client";

import Item from "./item";
import items from "./items.json";
import Button from "./button";
import { useState } from "react";


export default function ItemList() { 
    const [sortBy, setSortBy] = useState("name")

    // array for items that have been sorted
    const sortedItems = [...items].sort((a,b) => { 
        if (a[sortBy] > b[sortBy]) return 1;
        if (a[sortBy] < b[sortBy]) return -1;

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
                />
            ))}
            </ul>
        </div>
    )
} 