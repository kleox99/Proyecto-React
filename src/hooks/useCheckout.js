import React, { useEffect, useState } from 'react'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { app } from '../App';

export const useCheckout = () => {

    const [order, setOrder] = useState();

    useEffect(() => {
        const db = getFirestore(app)

        addDoc(collection(db, "cities"), {
            name: "Tokyo",
            country: "Japan"
        }).then((data) => {
        console.log("🚀 ~ file: useCheckout.js:13 ~ addDoc ~ data:", data)

        });
    },  []);
}
