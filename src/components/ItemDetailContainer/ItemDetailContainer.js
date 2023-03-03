import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';

export const ItemDetailContainer = () => {
    const {id} = useParams()

    const [pokemon] = useApi(id)
    
    if (pokemon === null) {
        return <div>CARGANDO...</div>
    }

    return (
        <div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/> 
            <div>
                <h5>Nombre de pokemon: {pokemon.name}</h5>
                <p>Nº de pokedex: {pokemon.id}</p>
                <b>Precio: ${pokemon.base_experience / 100}</b>
                <button>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}