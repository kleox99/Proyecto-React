import React from 'react'
import { Link } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';

export const ItemListElement = ({id}) => {
    const [pokemon] = useApi(id)

    if (pokemon === null) {
        return <></>
    }

    return (
        <Link to={`/item/${pokemon.name}`}>
            <img src={pokemon.sprites.front_default} />
            <h5>Nombre: {pokemon.name}</h5>
        </Link>
    )
}
