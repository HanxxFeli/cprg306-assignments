"use client";

import { useState } from "react";
import Button from "./button";

export default function NewItem() { 
    const [quantity, setQuantity] = useState(1)

    // increment function
    function increment() { 
        setQuantity(quantity + 1);
    }

    // decrement function
    function decrement() { 
        setQuantity(quantity - 1);
    }

    return ( 
        <main>
            <h2 className="font-bold m-4 py-2 px-4 rounded bg-purple-900 text-white w-2xs">The current quantity is: {quantity}</h2>
            <Button onClick={decrement} disabled={quantity === 0} buttonName={"Decrease by 1"}></Button>
            <Button onClick={increment} disabled={quantity === 20} buttonName={"Increase by 1"}></Button>
        </main>
    )
}