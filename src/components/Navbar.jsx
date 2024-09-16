import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css'; // Ensure this import is at the top of your file
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      setHidden(true);
    } else {
      // Scrolling up
      setHidden(false);
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <div className={`navbar ${hidden ? 'navbar-hidden' : ''}`}>
      <div className="nav-left">
        <h1>IIC</h1>
      </div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/ambassador">Ambassador</Link>
        <Link to="/team">Team</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/faqs">Faqs</Link>
      </div>
      <div className="nav-right">
        <a href="">Problem Statements</a>
      </div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </div>
  );
};

export default Navbar;
