import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContex';
import { Coin } from '../Icons/Coin';
import { CheckoutItem } from './CheckoutItem';

export const Checkout = () => {
    
    const {cartItems} = useContext(CartContext)

    const total = cartItems.reduce((amount , item) => {
        amount += item.price * item.quantity
        return amount
    }, 0 )

    return (
        <div>
            {cartItems.map(item => <CheckoutItem key={item.id} item={item}/>)}
            <span>Total: {total}<Coin/></span>
        </div>
    )
}
