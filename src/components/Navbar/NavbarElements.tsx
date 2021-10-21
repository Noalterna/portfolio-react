import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.div<{scrollNav :boolean}>`
    background: ${({scrollNav}) => (scrollNav ? 'red' : 'transparent')};
    display: flex;
    justify-content: center;
    padding: 0 2%;
    top:0;
    position: sticky;
    align-items:center;
    height: 80px;
    text-align:center;
    font-size:1.4rem;
    z-index:5;
    color: black;
    font-family: 'Montserrat';
    font-size: 1.2rem;
    font-weight: 100;
    text-decoration: none;

    @media screen and (max-width: 900px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 0 24px;
    align-items:center;
`;

export const Logo = styled(LinkR)`
    display: flex;
    text-align: start;
    align-items: center;
    font-size: 1.3rem;
    color: black;
    font-weight: 800;
    font-family: 'Major Mono Display';
    line-height: 15pt;
    width:14px;
    text-decoration: none;
    cursor: inherit;
    height:80px;
`;

export const NavbarSectionText = styled.div`
    display:flex;
    align-items: center;
    text-align: center;
    list-style: none;
    margin-right: -22px;
    @media screen and (max-width: 900px) {
        display: none;
    }

`

export const NavLink = styled(LinkR)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.1rem 0.4rem;
    margin: 0 0.9rem;

`;


export const MailButton = styled.a`
    display:flex;
    align-items: center;
    font-size: 1rem;
    justify-content: space-around;
    padding: 1vmin 1.6vmin;
    height:fit-content;
    background-color: black;
    border-radius: 20px;
    margin: 1rem;  
    color: white;
    text-decoration: none;
`;