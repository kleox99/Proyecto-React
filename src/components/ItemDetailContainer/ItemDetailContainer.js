import React from 'react'
import { useParams } from 'react-router-dom';
import { useItemDetail } from '../../hooks/useItemDetail';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const {id} = useParams();

    const item = useItemDetail(id);

    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}