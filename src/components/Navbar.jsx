import React, { useState, useEffect } from 'react'
import '../styles/Navbar.css';


const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="nav-left">
        <img src="/assets/iic logo bg removed 2.png" alt="" />
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
          <span>
            Problem Statments
          </span>
          <img src="/assets/right-arrow.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar