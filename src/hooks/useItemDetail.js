import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React from 'react'

export const useItemDetail = (id) => {    

    const [item, setItem] = useState({});


    useEfect(() => {
        const db = getFirestore();

        const itemRef = doc(db, "items", id);
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data()});
            };
        });
    })

    return item;
}
