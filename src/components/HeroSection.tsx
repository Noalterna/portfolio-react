import React from 'react';
import { BehanceOutlined, LinkedinFilled, GithubOutlined, MailOutlined, DownOutlined } from '@ant-design/icons';
import TypeWriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../home.css';
import { expand, shrink } from '../cursor';

const HeroSection = () => {
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
                    <p className="Iam-description" onMouseEnter={() => expand()} onMouseLeave={() => shrink()} ><a href="https://www.google.com/" target="_blank">I'm a designer,</a></p>
                    <p className="Iam-description" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}><a href="" target="_blank">I'm a developer,</a></p>
                    <p className="Iam-description" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}><a href="" target="_blank">I'm an illustrator,</a></p>
                    <p className="Iam-description" >I'm from Poland.</p>
                </div>
            </div>
            <div id="social-line">
                <a href="https://www.behance.net/adalucz" target="_blank" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}><BehanceOutlined className="social-icons clickable" /></a>
                <a href="https://www.linkedin.com/in/adrianna%C5%82/" target="_blank" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}><LinkedinFilled className="clickable social-icons" /></a>
                <a href="https://github.com/noalterna" target="_blank" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}><GithubOutlined className="social-icons" /></a>
            </div>
            <span className="down-arrow" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}><FontAwesomeIcon icon={faChevronDown} /></span>
        </>
    )
}

export default HeroSection;
