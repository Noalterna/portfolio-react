import React from 'react';
import { Route } from 'react-router';
import HeroSection from '../components/HeroSection';
import '../App.css';
import Navbar from '../components/Navbar';
import ProjectSection1 from '../components/ProjectSectionOne';

const About = () => {
    

    return (
        document.body.style.backgroundColor = '#111010',
        <>
            <Navbar />
            <HeroSection/>
            <ProjectSection1/>
        </>
    )
};

export default About;
