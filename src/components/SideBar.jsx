import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ onClose }) => { // Accepting an onClose function as a prop
    return (
        <div className="nav-screen">
            <FontAwesomeIcon icon={faTimes} className="fa-3x" onClick={onClose} />
            <div className="nav-container">
                <div className="nav-links">
                    <ul>
                        <li><a href="#about" onClick={onClose}>ABOUT</a></li>
                        <li><a href="#portfolio" onClick={onClose}>PORTFOLIO</a></li>
                        <li><a href="#contact" onClick={onClose}>CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
