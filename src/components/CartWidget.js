import React, { useContext } from 'react'
import { Notification } from './Notification/Notification';
import {Icons} from './Icons/Icons'
import { CartContext } from '../context/CartContex';
import { StyledLink } from './NavBar/NavBarContainers';


export const CartWidget = () => {

    const {cartItems} = useContext(CartContext) 
    const number = cartItems.length

    return (
        <StyledLink to={"/cart"}>
            <Notification number={number}>
                <Icons type={"cart"}/>
            </Notification>
        </StyledLink>
    )
}
