import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContex';
import {Coin} from '../Icons/Coin'
import { ItemQuantitySelector } from '../ItemQuantitySelector/ItemQuantitySelector';


export const ItemDetail = ({item}) => {

    const {addItemToCart} =  useContext(CartContext)

    const addItem = (quantity) => {
        if (quantity) {
            const newItem = {quantity, ...item} 
            addItemToCart(newItem)
        }
    }

    return (
        <div>
            <section>
                <img height={113} width={113} src={item.imageid} alt={item.title} />
            </section>
            <div>
                <h3>{item.title}</h3>
                <span>{item.description}</span>
                <span>{item.stats}</span>
                <span><Coin/>{item.price}</span>
                <ItemQuantitySelector onAdd={addItem}/>
            </div>
        </div>
    )
}
