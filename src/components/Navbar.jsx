import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);

      if (currentScrollY > 40) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleLinkClick = () => {
    setMenuOpen(false);  // Close the menu when a link is clicked
  };

  return (
    <div className={`navbar ${scrolling ? 'scrolled' : ''} ${scrollDirection === 'down' ? 'hide' : 'show'}`}>
      <div className="nav-left">
        <img src="/assets/iic logo bg removed 2.png" alt="logo" />
      </div>
      <div className="nav-mid">
        <div className="nav-links">
          <div className="nav-link active"><a href="/">Home</a></div>
          <div className="nav-link"><a href="/about">About</a></div>
          <div className="nav-link"><a href="/team">Team</a></div>
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-right-btn">
          <span>Problem Statements</span>
          <img src="/assets/right-arrow.svg" alt="arrow" />
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className={`hamburger ${menuOpen ? 'hide' : ''}`} onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Mobile Menu */}
      <div className={`menu ${menuOpen ? 'active' : ''}`}>
        <ul className="menu-links">
          <li className="nav-link" onClick={handleLinkClick}><a href="/">Home</a></li>
          <li className="nav-link" onClick={handleLinkClick}><a href="/about">About</a></li>
          <li className="nav-link" onClick={handleLinkClick}><a href="/team">Team</a></li>
          <li className="nav-link" onClick={handleLinkClick}><a href="/problem-statements">Problem Statements</a></li>
        </ul>
      </div>

      {/* Close Menu Icon */}
      <div className={`hamburger-close ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        &times;
      </div>
    </div>
  );
};

export default Navbar;
