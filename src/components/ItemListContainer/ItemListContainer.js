import React from 'react'
import { useItemList } from '../../hooks/useItemList';
import { CategoryList } from '../CategoryList/CategoryList';
import { ListContainer } from './ListContainerStyle';

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

    const categoriesList = Object.entries(itemGroups);
    
    return(
        <ListContainer>
            {categoriesList.map(categoryList => <CategoryList key={categoryList[0]} categoryName={categoryList[0]} itemList={categoryList[1]} />)}    
        </ListContainer>
    )
}