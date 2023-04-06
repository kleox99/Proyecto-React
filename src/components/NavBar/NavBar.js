import React from 'react'
import { useNavBar } from '../../hooks/useNavBar';
import { CartWidget } from '../CartWidget';
import { Header, Nav, StyledLink } from './NavBarContainers';
import logo from '../../assets/logo.png'


export const NavBar = () => {
    const categories = useNavBar();

    return (
        <Header>
            <StyledLink to={`/`}>      
            <img src={logo} height="100" width="100" alt="logotipo" />
            </StyledLink>
            <Nav>
                {
                    categories.map(category => <StyledLink to={`/category/${category.categoryid}`} key={category.categoryid}>{category.name}</StyledLink>)
                }
            </Nav>
            <CartWidget/>
        </Header>
    )
}
