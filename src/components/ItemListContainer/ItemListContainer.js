import React from 'react'
import { useParams } from 'react-router-dom';
import { useItemList } from '../../hooks/useItemList';
import { CategoryList } from '../CategoryList/CategoryList';
import { ListContainer } from './ListContainerStyle';

export const ItemListContainer = () => {
    const itemList = useItemList();

    const {id} = useParams()

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

    const itemGroups = itemList ? groupByCategory(itemList) : {}

    const categoriesList = Object.entries(itemGroups);

    return(
        <ListContainer>
            {id && itemGroups?.[id] ?
                <CategoryList key={id} categoryName={id} itemList={itemGroups?.[id]}/>
            :
                categoriesList.map(categoryList => <CategoryList key={categoryList[0]} categoryName={categoryList[0]} itemList={categoryList[1]} />)
            }    
        </ListContainer>
    )
}