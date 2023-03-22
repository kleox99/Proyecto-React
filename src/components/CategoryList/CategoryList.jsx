import React from 'react'
import { ItemListElement } from '../ItemListElement/ItemListElement';

export const CategoryList = ({categoryName , itemList}) => {
  return (
    <div>
      <h2>{categoryName.toUpperCase()}</h2>
      {itemList.map((item) => <ItemListElement key={item.id} item={item}/>)}
    </div>
  )
}
