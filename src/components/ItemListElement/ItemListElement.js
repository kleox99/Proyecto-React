import React from 'react'
import { Link } from 'react-router-dom';
import { Coin } from '../Icons/Coin';
import { ItemCard } from './ItemListStyle';


export const ItemListElement = ({item}) => {
    return(
        <Link to={`/item/${item.id}`}>
            <ItemCard>
                <picture>
                    <img height={113} width={113} src={item.imageid} alt={item.title} />
                </picture>
                <div>
                    <h3>{item.title}</h3>
                    <span>{item.stats}</span>
                    <span><Coin/>{item.price}</span>
                </div>
            </ItemCard>
        </Link>
    )
}
