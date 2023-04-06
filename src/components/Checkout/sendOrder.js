import { collection, addDoc, getFirestore } from "firebase/firestore";
import { app } from '../../App';

export const sendOrder = (items, user, onSuccess) => {

    const order = {
        user, items 
    } 
    const db = getFirestore(app)

    addDoc(collection(db, "order"), order).then((snapshot) => {
        order.id = snapshot.id;
        onSuccess(order)
    }).catch(error => console.error(error));
}
