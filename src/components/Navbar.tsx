import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
                <div className="Navbar-container">
                    <Link to="/" className="Navbar-logo">
                        Adrianna Łuczak
                    </Link>
                    <div id="Menu-item">
                        <Link to="/about">
                            About
                        </Link>
                    </div>
                </div>
        </>
    )
}
export default Navbar;