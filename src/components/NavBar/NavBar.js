import React from 'react'
import { Link } from 'react-router-dom';
import { useNavBar } from '../../hooks/useNavBar';
import { CartWidget } from '../CartWidget';
import { Header, Nav } from './NavBarContainers';
import logo from '../../assets/logo.png'


export const NavBar = () => {
    const categories = useNavBar();

    return (
        <Header>
            <Link to={`/`}>      
            <img src={logo} height="100" width="100" alt="logotipo" />
            </Link>
            <Nav>
                {
                    categories.map(category => <Link to={`/category/${category.categoryid}`} key={category.categoryid}>{category.name}</Link>)
                }
            </Nav>
            <CartWidget/>
        </Header>
    )
}
