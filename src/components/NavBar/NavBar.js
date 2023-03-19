import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavBar } from '../../hooks/useNavBar';
import { CartWidget } from '../CartWidget';
import { Header, Nav } from './NavBarContainers';

export const NavBar = () => {
    const categories = useNavBar();

    return (
        <Header>
            <Link to={`/`}>      
            <h5>LOGOTIPO</h5>
            </Link>
            <Nav>
                {
                    categories.map(category => <Link to={`/category/${category.categoryid}`} key={category.categoryid}>{category.name}</Link>)
                }
            </Nav>
            <CartWidget number={1}/>
        </Header>
    )
}
