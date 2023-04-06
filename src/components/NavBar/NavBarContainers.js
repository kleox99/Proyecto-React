import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    height: 10vh;
    background-color: orangered;
    display: flex;

`
const Nav = styled.nav`
    display: flex;
    gap: 8px;
` 

const StyledLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    gap: 20px;
`

export {Header, Nav, StyledLink} 