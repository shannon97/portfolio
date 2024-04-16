import React, { useState } from 'react';

const NavbarToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'} fa-3x`} onClick={toggleNav}></i>
            {isOpen && <div className="nav-screen">...</div>}
        </>
    );
};

export default NavbarToggle;
