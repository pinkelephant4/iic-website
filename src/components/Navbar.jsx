import React, { useState, useEffect } from "react";
import { throttle } from "lodash";
import "../styles/Navbar.css";

const Navbar = ({ active }) => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > 40) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }, 100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="nav-left">
        <a href="/">
          <img src="/assets/MUJ.png" alt="logo" className="mujlogo" />
        </a>
        <a href="/">
          <img src="/assets/iic logo bg removed 2.png" alt="logo" />
        </a>
      </div>
      <div className="nav-mid">
        <div className="nav-links">
          <a href="/">
            <div className={`nav-link ${active == "" ? "active" : ""}`}>
              Home
            </div>
          </a>
          <a href="/about">
            <div className={`nav-link ${active == "about" ? "active" : ""}`}>
              About
            </div>
          </a>
          <a href="/ambassador">
            <div
              className={`nav-link ${active == "ambassador" ? "active" : ""}`}
            >
              Ambassador
            </div>
          </a>
          <a href="/team">
            <div className={`nav-link ${active == "team" ? "active" : ""}`}>
              Team
            </div>
          </a>
        </div>
      </div>
      <div className="nav-right">
        <div
          className="nav-right-btn"
          onClick={() => {
            window.location.href = "/problems";
          }}
        >
          <span className="nav-btn-content">
            Problem Statements
            <img src="/assets/right-arrow.svg" alt="arrow" />
          </span>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${menuOpen ? "hide" : ""}`}
        onClick={toggleMenu}
      >
        &#9776;
      </div>

      {/* Mobile Menu */}
      <div className={`menu ${menuOpen ? "active" : ""}`}>
        <ul className="menu-links">
          <li className="nav-link" onClick={handleLinkClick}>
            <a href="/">Home</a>
          </li>
          <li className="nav-link" onClick={handleLinkClick}>
            <a href="/about">About</a>
          </li>
          <li className="nav-link" onClick={handleLinkClick}>
            <a href="/team">Team</a>
          </li>
          <li className="nav-link" onClick={handleLinkClick}>
            <a href="/ambassador">Ambassador</a>
          </li>
          <li className="nav-link" onClick={handleLinkClick}>
            <a href="/problems">Problem Statements</a>
          </li>
        </ul>
      </div>

      {/* Close Menu Icon */}
      <div
        className={`hamburger-close ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        &times;
      </div>
    </div>
  );
};

export default Navbar;
