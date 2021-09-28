import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Navbar-about.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function NavbarAbout() {
    return (
        <>
                <div className="Navbar-container">
                    <Link to="/" id="Back-button">
                    <i className="bi bi-arrow-left"></i><a id="back">Back</a>
                    </Link>
                    <div id="Mail-button">
                        <Link to="/about">
                            adalucz13@gmail.com
                        </Link>
                    </div>
                </div>
        </>
    );
}

export default NavbarAbout;
