import React from 'react'
import { Link } from 'react-router-dom';
import { Coin } from '../Icons/Coin';


export const ItemListElement = ({item}) => {
    return(
        <div>
            <section>
                <img height={113} width={113} src={item.imageid} alt={item.title} />
            </section>
            <div>
                <h3>{item.title}</h3>
                <span>{item.stats}</span>
                <span><Coin/>{item.price}</span>
            </div>
        </div>
    )
}
