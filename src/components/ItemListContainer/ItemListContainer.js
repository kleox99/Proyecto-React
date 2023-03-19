import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useItemList } from '../../hooks/useItemList';
import { ItemListElement } from '../ItemListElement/ItemListElement';

export const ItemListContainer = () => {
    const itemList = useItemList();
    const groupByCategory = (items) => {
        return items.reduce((group, item) => {
            if (item.categoryid in group) {
                group[item.categoryid].push(item);
            } else {
                group[item.categoryid] = [item]
            }

            return group;
        }, {}) 
    }

    const itemGroups = itemList ? groupByCategory(itemList) : []

    return(
        <div>

            
        </div>
    )
}