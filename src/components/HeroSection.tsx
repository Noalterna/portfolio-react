import React from 'react';
import { BehanceOutlined, LinkedinFilled, GithubOutlined, MailOutlined, DownOutlined } from '@ant-design/icons';
import TypeWriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../home.css';
import {expand, shrink} from '../cursor';

const HeroSection = () => {
    /* function expand() {
        const cursor = document.getElementById("cursor");
        cursor.style.transform = "scale(3.5)";
    }
    function shrink() {
        const cursor = document.getElementById("cursor");
        cursor.style.transform = "scale(1)";
    } */
    return (
        <>
            <div className="container-flex">
                <div className="container-grid">
                    <div id="hello">Hello, I'm </div>
                    <a href="about" id="name" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}>
                        <TypeWriter
                            options={{ loop: true }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Adrianna")
                                    .pauseFor(3000)
                                    .start()
                            }} />
                    </a>
                    <p className="Iam-description" onMouseEnter={() => expand()} onMouseLeave={() => shrink()} ><a href="https://www.google.com/">I'm a designer,</a></p>
                    <p className="Iam-description" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}><a href="">I'm a developer,</a></p>
                    <p className="Iam-description" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}><a href="">I'm an illustrator</a></p>
                    <p className="Iam-description" >from Poland.</p>
                </div>
            </div>
            <div id="social-line">
                <a href="" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}><BehanceOutlined className="social-icons clickable" /></a>
                <a href="" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}><LinkedinFilled className="clickable social-icons" /></a>
                <a href="" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}><GithubOutlined className="social-icons" /></a>
            </div>
            <span className="down-arrow" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}><FontAwesomeIcon icon={faChevronDown} /></span>
        </>
    )
}

export default HeroSection;
