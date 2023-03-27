import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContex';
import { CartItem } from './CartItem';

export const Cart = () => {
    const {cartItems} = useContext(CartContext);
    return (
        <div>
            {cartItems.map(item => <CartItem key={item.id} item={item}/>)}   
            <Link to="/checkout">Ir a pagar</Link>         
        </div>
    )
}
