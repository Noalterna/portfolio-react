import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Navbar = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 2%;
    margin-right: 2%;
    top:0;
    position: sticky;
    align-items:center;
    height: 80px;
    text-align:center;
    font-size:1.4rem;
    color: white;
    font-family: 'Bebas Neue';
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 0 24px;
`;

export const Logo = styled(LinkR)`
    display: flex;
    text-align: start;
    align-items: center;
    font-size: 1.4rem;
    color: #EB0542;
    font-family: Niconne;
    line-height: 15pt;
    width:14px;
    text-decoration: none;
    cursor: inherit;
    height:80px;
`;

export const NavbarLinks = styled.div`
    display:flex;
    align-items: center;
    text-align: center;
    list-style: none;
    margin-right: -22px;
`;

export const NavbarItem = styled(LinkR)`
    height: 80px;
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.3rem;
`;

export const NavbarMail = styled.a`
    display:flex;
    align-items: center;
    justify-content: space-around;
    padding: 1vmin 1.6vmin;
    height:fit-content;
    background-color: #EB0542;
    border-radius: 20px;
    margin: 1rem;  
    text-decoration:none;
    height:80px;
`;