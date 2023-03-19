import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const useNavBar = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        const db = getFirestore();

        const CategoriesCollection = collection(db, "Categories");
        getDocs(CategoriesCollection).then((snapshot) => {
            setCategories(snapshot.docs.map((doc) => doc.data()))
        })
    }, []);

    return categories;
}
