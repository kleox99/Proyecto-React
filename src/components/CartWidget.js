import React, { useContext } from 'react'
import { Notification } from './Notification/Notification';
import {Icons} from './Icons/Icons'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContex';


export const CartWidget = () => {

    const {cartItems} = useContext(CartContext) 
    const number = cartItems.length

    return (
        <Link to={"/cart"}>
            <Notification number={number}>
                <Icons type={"cart"}/>
            </Notification>
        </Link>
    )
}
