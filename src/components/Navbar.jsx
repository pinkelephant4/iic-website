import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up'); // New state to track scroll direction
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);

      // Add logic to set scrolling state
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
    </div>
  );
};

export default Navbar;
