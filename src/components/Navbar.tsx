import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { MailOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { expand, shrink } from '../cursor';


function NavbarAbout() {
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

    return (
        <>
            <div className="Navbar">
                <div className="Navbar-container">
                    <Link to="/" id="logo" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}>
                        Adrianna Łuczak
                    </Link>
                    <div className="HamburgerIcon">
                        <FontAwesomeIcon icon={faHamburger} />
                    </div>
                    <div className="Navbar-section text">
                        <Link to="/about" className="NavItem">
                            <span onMouseEnter={() => expand()} onMouseLeave={() => shrink()}>About</span>
                        </Link>
                        <Link to="/resume.pdf" target="_blank" className="NavItem" >
                            <span onMouseEnter={() => expand()} onMouseLeave={() => shrink()}> Resume</span>
                        </Link>
                        <a href="mailto:adalucz13@gmail.com" className="text NavItem" id="Mail-button" onClick={copy} onMouseEnter={() => expand()} onMouseLeave={() => shrink()}>
                            <MailOutlined />
                            <span id="mail">adalucz13@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarAbout;
