import React from 'react';
import { Route } from 'react-router';
import '../about.css';
import '../App.css';
import NavbarAbout from '../components/Navbar-about';
import { BehanceOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import TypeWriter from 'typewriter-effect';

const About = () => {

    return (
        document.body.style.backgroundColor = '#111010',
        <>
            <NavbarAbout />
            <div className="container-flex">
                <div className="container-grid">
                    <div id="hello">Hello, I'm </div>
                    <div id="name">
                        <TypeWriter
                            options={{ loop: true }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Adrianna")
                                    .pauseFor(3000)
                                    .start()
                            }} />
                    </div>
                    <p className="Iam-description"><a href="">I'm a designer,</a></p>
                    <p className="Iam-description"><a href="">I'm a developer,</a></p>
                    <p className="Iam-description"><a href="">I'm an illustrator</a></p>
                    <p className="Iam-description">from Poland.</p>
                </div>
            </div>
            <div id="social-line">

            </div>
        </>
    )
};

export default About;
