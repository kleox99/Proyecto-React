import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemListElement } from '../ItemListElement/ItemListElement';

const ItemListContainer = () => {
    const {id} = useParams()
    console.log("🚀 ~ file: ItemListContainer.js:7 ~ ItemListContainer ~ id:", id)
    
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        const url = id !== undefined ? `https://pokeapi.co/api/v2/type/${id}` : "https://pokeapi.co/api/v2/pokemon";
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setPokemonList(id !== undefined ? res.pokemon : res.results)
                setIsLoading(false)
            })
    }, [id])   

    if (isLoading || pokemonList?.length === 0) {
        return <div>Buscando en la pokedex...</div>
  }

    return (
        <div>
            {pokemonList.map(pokemon => <ItemListElement id={id !== undefined ? pokemon?.pokemon?.name : pokemon?.name} key={id !== undefined ? pokemon?.pokemon?.name : pokemon?.name}/>)}
        </div>
    )
}

export {ItemListContainer}
