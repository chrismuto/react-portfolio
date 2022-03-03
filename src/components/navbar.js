import React, { useState } from 'react';

const Navbar = () => {
    return (
        <header>
            <h1> Chris Muto </h1>
            <nav>
                <ul className="header-ul">
                    <li className="header-li">
                        <a href="#about-me" className="header-a">About Me</a>
                    </li>
                    <li className="header-li">
                        <a href="#workSamples" className="header-a">Work</a>
                    </li>
                    <li className="header-li">
                        <a href="#contact" className="header-a">Contact</a>
                    </li>
                    <li className="header-li">
                        <a href="./Resume.pdf" className="header-a">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;