import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const useItemList = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const db = getFirestore();

        const itemCollection = collection(db, "ItemList");
        getDocs(itemCollection).then((snapshot) => {
            setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
        })
    }, []);

    return items;
}
