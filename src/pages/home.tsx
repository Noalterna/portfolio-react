import React, { useState } from 'react';
import { Route } from 'react-router';
import HeroSection from '../components/HeroSection/HeroSection';
import '../App.css';
import Navbar from '../components/Navbar/Navbar';
import ProjectSectionOne from '../components/ProjectSectionOne/ProjectSectionOne';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
    return (
        <>
           <HeroSection />
           <ProjectSectionOne />
        </>
    )
};

export default Home;
