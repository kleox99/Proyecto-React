import React from 'react'
import { Coin } from '../Icons/Coin';
import { ItemCard } from '../ItemListElement/ItemListStyle';

export const CheckoutItem = ({item}) => {

    return(
        <ItemCard>
            <div>
                <h3>{item.title}</h3>
                <span>Precio: {item.price}<Coin/> </span>
                <span>Cantidad: {item.quantity}</span>
            </div>
        </ItemCard>
    )
}