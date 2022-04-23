import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import nav_overview_active from '../../assets/nav_overview_active.png';
import nav_tickets from '../../assets/nav_tickets.png';


const Navbar = () => {
  return (
    <nav>
        <div className="nav__logo">
            <img src={logo} alt="Logo" />
            <h3>Dashboard Kit</h3>
        </div>
        <div className="nav__links">
            <div className="nav__links__link active">
                <img src={nav_overview_active} />
                <span>Overview</span>
            </div>
            <div className="nav__links__link">
                <img src={nav_tickets} />
                <span>Tickets</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;