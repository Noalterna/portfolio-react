import React from 'react';
import TypeWriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../../home.css';
import { expand, shrink } from '../../cursor';
import {
    Container, Hello, Name, DescriptionContainer,
    Description, HelloContainer, User, HeroBg, VideoBg, HeroContainer
} from './HeroSectionElements';


const HeroSection = () => {
    return (
        <>
                <HeroContainer id="hero">
                <Container>
                    <HelloContainer>
                        <Hello>Hello, I'm</Hello>
                        <Name to="/about" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}>
                            <TypeWriter
                                options={{ loop: true }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Adrianna")
                                        .pauseFor(3000)
                                        .start()
                                }} />
                        </Name>
                    </HelloContainer>
                    <DescriptionContainer>
                        <Description>
                            I'm delivering with <User> user</User> in mind.
                        </Description>
                    </DescriptionContainer>
                </Container>
                </HeroContainer>
           <a href="#projectOne" className="down-arrow" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}><FontAwesomeIcon icon={faChevronDown} size='3x' /></a>
        
        </>
    )
}

export default HeroSection;
