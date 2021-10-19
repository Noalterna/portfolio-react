import React, { useState } from 'react';
import { Route } from 'react-router';
import HeroSection from '../components/HeroSection';
import '../App.css';
import Navbar from '../components/Navbar/Navbar';
import ProjectSection1 from '../components/ProjectSectionOne';
import Sidebar from '../components/Sidebar/Sidebar';

const About = () => {
    
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        document.body.style.backgroundColor = '#111010',
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle= {toggle}/>
            <HeroSection />
            <ProjectSection1 />
        </>
    )
};

export default About;
