
"use client";

import { useUserAuth } from "../../../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";


export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("")

  // useEffect for redirection
  useEffect(() => { 
    if (!user) { 
      router.push("/") // handle redirection
    }
  }, [user, router])

  // useEffect for loading items 
  useEffect(() => { 
    if(!user) return;

    // gets items using getItems service
    async function loadItems() { 
      const result = await getItems(user.uid)
      setItems(result) // values from the items array from service will be set to the items state
    }

    loadItems()
  }, [user]) // refresh on user change

  // handler to add an item to items 
  const handleAddItem = async (newItem) => { 
    // add to firestore 
    const id = await addItem(user.uid, newItem);

    // update items 
    const itemWithId = {id, ...newItem} // fetches the newly created data from firestore alongside the id
    setItems((currentItems) => [...currentItems, itemWithId])
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

  if (!user) { 
    return ( 
      <p className="text-center mt-20">Redirecting...</p>
    )
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