import React, { useState, useEffect } from "react";
import { throttle } from "lodash";
import "../styles/Navbar.css";

const Navbar = ({ active }) => {
  const [scrolling, setScrolling] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

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
    setMenuToggle(!menuToggle)
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

      <button class={`nav-toggler ${menuToggle ? "toggler-open" : ""}`} onClick={handleLinkClick}>
        <span></span>
      </button>
      <ul className={`mobileMenu-links ${menuToggle ? "open" : ""}`}>
        <li className="mobileMenu-link">
          <a href="/">Home</a>
        </li>
        <li className="mobileMenu-link">
          <a href="/about">About</a>
        </li>
        <li className="mobileMenu-link">
          <a href="/team">Team</a>
        </li>
        <li className="mobileMenu-link">
          <a href="/ambassador">Ambassador</a>
        </li>
        <li className="mobileMenu-link">
          <a href="/problems">Problem Statements</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
