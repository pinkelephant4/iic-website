import { useState, useEffect } from "react";
import "../styles/Carousel.css";

import logo1 from "/Theme/Heath.png";
import logo2 from "/Theme/rocket.png";
import logo3 from "/Theme/BlockChain.png";
import logo4 from "/Theme/IOT.png";
import logo5 from "/Theme/OpenInnovation.png";
import logo6 from "/Theme/World.png";

const Carousel = () => {
  return (
      <div className="theme-page">
        <h1>THEME</h1>
        
        <div className="themes-row">
          <div className="theme-card">
            <img src={logo1} alt="Theme 1 Logo" className="theme-logo" />
            <p>Healt Care</p>
          </div>
          <div className="theme-card">
            <img src={logo2} alt="Theme 2 Logo" className="theme-logo" />
            <p>Space Tech</p>
          </div>
          <div className="theme-card">
            <img src={logo3} alt="Theme 3 Logo" className="theme-logo" />
            <p>BlockChain</p>
          </div>
        </div>
        
        <div className="themes-row">
          <div className="theme-card">
            <img src={logo4} alt="Theme 4 Logo" className="theme-logo" />
            <p>IOT Tech</p>
          </div>
          <div className="theme-card">
            <img src={logo5} alt="Theme 5 Logo" className="theme-logo" />
            <p>Open Innovation</p>
          </div>
          <div className="theme-card">
            <img src={logo6} alt="Theme 6 Logo" className="theme-logo" />
            <p>Enviromental</p>
          </div>
        </div>
      </div>
  );
};

export default Carousel;
