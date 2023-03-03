import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget';
import { Header, Nav } from './NavBarContainers';

export const NavBar = () => {
    
    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
            .then((res) => res.json())
            .then((res) => setCategories(res.results.map(type => type.name)));
    }, []);

    return (
        <Header>
            <Link to={`/`}>      
            <h5>LOGOTIPO</h5>
            </Link>
            <Nav>
                {
                    categories.map(category => <Link to={`/category/${category}`} key={category}>{category}</Link>)
                }
            </Nav>
            <CartWidget number={1}/>
        </Header>
    )
}
