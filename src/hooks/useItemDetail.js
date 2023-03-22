import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

export const useItemDetail = (id) => {    

    const [item, setItem] = useState({});

    useEffect(() => {
        const db = getFirestore();

        const itemRef = doc(db, "ItemList", id);
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data()});
            };
        });
    })

    return item;
}
