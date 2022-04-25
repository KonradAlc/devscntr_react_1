import React from 'react';
import './navbar.css';
import { NavbarData } from '../../navbarData';

import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';


const Navbar = () => {


    const navbarLinks = NavbarData.map((data, index) => {
        return (
            <NavLink key={index} to={data.path} className="nav__links__link">
                <img src={data.icon} />
                <span>{data.title}</span>
            </NavLink>
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