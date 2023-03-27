import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContex';
import { Coin } from '../Icons/Coin';
import { ItemCard } from '../ItemListElement/ItemListStyle';

export const CartItem = ({item}) => {

    const {removeItemFromCart} = useContext(CartContext)

    return(
        <ItemCard>
            <picture>
                <img height={113} width={113} src={item.imageid} alt={item.title} />
            </picture>
            <div>
                <h3>{item.title}</h3>
                <span>Precio: {item.price}<Coin/> </span>
                <span>Cantidad: {item.quantity}</span>
                <button onClick={() => removeItemFromCart(item.id)}>Eliminar del carrito</button>
            </div>
        </ItemCard>
    )
}
