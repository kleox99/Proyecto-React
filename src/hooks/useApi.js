import React, { useEffect, useState } from 'react'

export const useApi = (id) => {
    const [pokemon, setPokemon] = useState(null);
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((res) => setPokemon(res))
    }, [id]) 
    
    return [pokemon];
}
