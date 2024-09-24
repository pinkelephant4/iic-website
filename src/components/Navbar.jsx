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

  return (
    <div className={`navbar ${scrolling ? 'scrolled' : ''} ${scrollDirection === 'down' ? 'hide' : 'show'}`}>
      <div className="nav-left">
        <img src="/assets/iic logo bg removed 2.png" alt="logo" />
      </div>
      <div className="nav-mid">
        <div className="nav-links">
          <div className="nav-link active">Home</div>
          <div className="nav-link">About</div>
          <div className="nav-link">Team</div>
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
          <li className="nav-link" onClick={toggleMenu}>Home</li>
          <li className="nav-link" onClick={toggleMenu}>About</li>
          <li className="nav-link" onClick={toggleMenu}>Team</li>
          <li className="nav-link" onClick={toggleMenu}>Problem Statements</li>
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