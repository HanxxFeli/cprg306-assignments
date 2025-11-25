import { db } from "@/app/utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


// get all items under the userId
export async function getItems(userId) { 
    const itemsRef = collection(db, "users", userId, "items") // reference the collection in firebase
    const itemSnap = await getDocs(itemsRef)

    // store each "obj/doc" from the collection under userId to items array
    const items = []
    itemSnap.forEach((doc) => { 
        items.push({
            id: doc.id,
            ...doc.data(),
        })
    })

    return items;
}

// add an item 
export async function addItem(userId, item) { 
    const itemsRef = collection(db, "users", userId, "items") // reference collection in firebase
    const docRef = await addDoc(itemsRef, item) // get the "obj" from the collection

    return docRef.id
}