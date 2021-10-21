import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

export const HeroContainer = styled.div`
    display: flex;
    height: 90vh;
    z-index:1;
    align-items: center;
    background-color: white;
    width: 100%;
    position: relative;
    top: -80px
`
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center ;
    color: black;
    font-family: "Montserrat";
    font-size: 3rem;
    margin: 0 2%;
    top: 16vmax;
    padding: 0 24px;
    position: absolute;
    z-index: 3;
    width: 100%;
    max-width: 1230px;
    min-height:auto;
`
export const HelloContainer = styled.div`
    display:flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    
    
`

export const Hello = styled.span`
    display: flex;
    font-weight: lighter;
    
`
export const Name = styled(LinkR)`
    display: flex;
    font-family: "Major Mono Display";
    padding: 0 1rem;
    margin: 0 5% 0 0;
    width: 300px;

    @media screen and (max-width: 656px) {
        margin: 0 20% 0 0;
        padding: 0;
    }
`
export const DescriptionContainer = styled.div`
    font-size: 1.8rem;
    display:flex;
    margin: 1rem 5% 0 0;
`
export const Description = styled.div`
    
`
export const User = styled.span`
    font-family: "Major Mono Display";

`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background:white;
    z-index:-1;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: white;
`