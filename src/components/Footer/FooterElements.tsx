import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    background-color: white;
    color: black;   
    height: 36px;
    z-index:5;
    position: fixed;
    bottom:0;
    align-items: center;
    @media screen and (max-width: 900px ) {
        justify-content: center;
        height: 48px;
        margin-top: -48px;
    }
`;

export const Icon = styled.a`
    margin: 0 1rem;
`
export const IconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 15%;
    position: absolute;

    @media screen and (max-width: 900px ) {
        justify-content: space-around;
        width: 100%;
    }
    
`