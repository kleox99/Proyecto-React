import React from 'react'
import { useItemList } from '../../hooks/useItemList';
import { CategoryList } from '../CategoryList/CategoryList';

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
    console.log("🚀 ~ file: ItemListContainer.js:22 ~ ItemListContainer ~ itemGroups:", itemGroups)

    const categoriesList = Object.entries(itemGroups);
    console.log("🚀 ~ file: ItemListContainer.js:25 ~ ItemListContainer ~ categoriesList:", categoriesList)
    

    return(
        <div>

            {categoriesList.map(categoryList => <CategoryList categoryName={categoryList[0]}  itemList={categoryList[1]} />)}    
        </div>
    )
}