import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavBar = () => {
    return (
        <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
            <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <li>
                    <Link to="home" spy={true} smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="about" spy={true} smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to="projects" spy={true} smooth={true} duration={500}>Projects</Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

