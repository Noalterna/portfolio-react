import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { MailOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { expand, shrink } from '../../cursor';
import { Nav, NavbarContainer, Logo, NavLink, NavbarSectionText, MailButton, } from "./NavbarElements";


function Navbar({ toggle }) {
    const [copied, setCopied] = useState(false);
    function copy() {
        const el = document.createElement('input');
        el.value = "adalucz13@gmail.com";
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setCopied(true);
    }
    const [scrollNav, setscrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setscrollNav(true)
        } else {
            setscrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <Logo to="/" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}>
                        Adrianna Łuczak
                    </Logo>
                    <FontAwesomeIcon icon={faHamburger} className="HamburgerIcon" onClick={toggle} />
                    <NavbarSectionText>
                        <NavLink to="/about" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}>
                            About
                        </NavLink>
                        <NavLink to="/resume.pdf" target="_blank" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}>
                            Resume
                        </NavLink>
                        <MailButton href="mailto:adalucz13@gmail.com" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}>
                            <MailOutlined />
                            <span id="mail">ADALUCZ13@GMAIL.COM</span>
                        </MailButton>
                    </NavbarSectionText>
                </NavbarContainer>
            </Nav>

           {/*  <div className="Navbar">
                <div className="Navbar-container">
                    <Link to="/" id="logo" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}>
                        Adrianna Łuczak
                    </Link>
                    <FontAwesomeIcon icon={faHamburger} className="HamburgerIcon" onClick={toggle} />
                    <div className="Navbar-section text">
                        <Link to="/about" className="NavItem" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}>
                            About
                        </Link>
                        <Link to="/resume.pdf" target="_blank" className="NavItem" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}>
                            Resume
                        </Link>
                        <a href="mailto:adalucz13@gmail.com" className="text NavItem" id="Mail-button" onClick={copy} onMouseEnter={() => expand()} onMouseLeave={() => shrink()}>
                            <MailOutlined />
                            <span id="mail">ADALUCZ13@GMAIL.COM</span>
                        </a>
                    </div>
                </div>
            </div>  */}
        </>
    );
}

export default Navbar;
