import React from 'react'
import { categories } from '../../mockdata/categories';
import { CartWidget } from '../CartWidget';
import { Header, Nav } from './NavBarContainers';

export const NavBar = () => {
    return (
        <Header>
            <Nav>
                {
                    categories.map(category => <a href='#'>{category}</a>)
                }
            </Nav>
            <CartWidget number={1}/>
        </Header>
    )
}
