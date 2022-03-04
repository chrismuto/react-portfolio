import React, { useState } from 'react';

const Navbar = ({setCurrentPage}) => {
    return (
        <header>
            <h1> Chris Muto </h1>
            <nav>
                <ul className="header-ul">
                    <li className="header-li">
                        <a onClick={() => setCurrentPage('About')} className="header-a">About Me</a>
                    </li>
                    <li className="header-li">
                        <a onClick={() => setCurrentPage('WorkSamples')} href="#workSamples" className="header-a">Work</a>
                    </li>
                    <li className="header-li">
                        <a onClick={() => setCurrentPage('Contact')} className="header-a">Contact</a>
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