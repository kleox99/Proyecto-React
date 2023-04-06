import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (item) => {
        const itemInCart = cartItems.find(element => element.id === item.id)

        if  (itemInCart) {
            itemInCart.quantity += item.quantity
        } else {
            setCartItems([...cartItems, item]);
        }
    };
    
    const removeItemFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    };
    
    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
};