"use client";

import { useState } from "react";
import Button from "./components/button";
import TextField from "./components/text-field";

export default function NewItem({onAddItem}) { 
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [category, setCategory] = useState("Produce")

    const categories = ["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"]

    // name event handler
    const handleName = (event) => { 
        console.log(event.target.value)
        setName(event.target.value)
    }

    // increment quantity function
    const increment = () => { 
        setQuantity(quantity + 1);
    }

    // decrement quantity function
    const decrement = () => { 
        setQuantity(quantity - 1);
    }   

    // category event handler
    const handleCategory = (event) => { 
        setCategory(event.target.value)
    }

    const handleSubmit = (event) => { 
        event.preventDefault()

        // creating the item object
        const item = {
            "name": name,
            "quantity": quantity,
            "category": category
        }
        
        console.log(item); // log the created item in the console

        // create an alert using stringify method
        alert(JSON.stringify(item));

        //add item to the new-item component
        onAddItem(item)

        // reset the variables 
        setName("")
        setQuantity(1)
        setCategory("Produce")
    }

    return ( 
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <TextField labelName="Item Name" value={name} onChange={handleName}/>

                <div>
                    <h2 className="font-bold py-2 px-4 rounded text-center bg-purple-900 text-white mb-2">
                        Current: {quantity}
                    </h2>
                    <div className="flex justify-between">
                        <Button type="button" onClick={decrement} disabled={quantity === 0} buttonName="-"/>
                        <Button type="button" onClick={increment} disabled={quantity === 20} buttonName="+"/>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold mb-1">Category</label>
                    <select 
                        className="border border-purple-500 rounded p-2 bg-white"
                        value={category} 
                        onChange={handleCategory}
                    > 
                        <option value={category}>{category}</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                
                <Button type="submit" buttonName="Add Item"/>
            </form>
        </div>
    )
}