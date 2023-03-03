import React from 'react'
import { useParams } from 'react-router-dom';

export const itemDetailContainer = () => {
    const {id} = useParams()
    console.log("🚀 ~ file: itemDetailContainer.js:6 ~ itemDetailContainer ~ id:", id)

    
    
    return (
        <div>itemDetailContainer</div>
    )
}
