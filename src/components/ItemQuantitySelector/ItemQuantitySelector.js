import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContex';
import { AddItemButton, CounterButton } from './ItemQuantityStyle';

export const ItemQuantitySelector = ({onAdd}) => {

    const [quantity, setQuantity] = useState(0);

    const add = () => {
        setQuantity(qty => qty + 1) 
    }

    const subtract = () => {
        if (quantity > 0) {
            setQuantity(qty => qty - 1)
        } else {
            setQuantity(qty => qty = 0)
        }
    }

    return (
        <div>
            <CounterButton onClick={subtract}>-</CounterButton>
            <span> 
                {quantity} 
            </span>
            <CounterButton onClick={add}>+</CounterButton>
            <AddItemButton onClick={() => onAdd(quantity)}>
                Añadir al carrito
            </AddItemButton>
        </div>
    )
}
