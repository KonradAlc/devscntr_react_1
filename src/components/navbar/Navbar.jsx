import React from 'react';
import './navbar.css';
import { NavbarData } from '../../navbarData';

import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';


const Navbar = () => {
    const navbarLinks = NavbarData.map((data, index) => {
        return (
            <Link key={index} to={data.path}>
                <div className="nav__links__link">
                    <img src={data.icon} />
                    <span>{data.title}</span>
                </div>
            </Link>
        )
    }) 

    return (
        <nav>
            <div className="nav__logo">
                <img src={logo} alt="Logo" />
                <h3>Dashboard Kit</h3>
            </div>
            
            <div className="nav__links">
                {navbarLinks}
            </div>
        </nav>
    )
}

export default Navbar;