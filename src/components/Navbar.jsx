import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1>LOGO</h1>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/ambassador">Ambassador</Link>
        <Link to="/team">Team</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/faqs">Faqs</Link>
      </div>
      <div className="nav-right">
        <a href="#">Problem Statements</a>
      </div>
    </nav>
  );
};

export default Navbar;
