import { useState, useEffect } from "react";
import "../styles/Carousel.css";

import logo1 from "/Theme/Heath.png";
import logo2 from "/Theme/rocket.png";
import logo3 from "/Theme/BlockChain.png";
import logo4 from "/Theme/IOT.png";
import logo5 from "/Theme/OpenInnovation.png";
import logo6 from "/Theme/World.png";
import MagneticEffect from "./Magnetic";

const Carousel = () => {
  return (
    <div className="theme-page">
      <h1>Themes</h1>
      
      <div className="themes-row">
      <MagneticEffect>  
        <div className="theme-card">
          <img src={logo1} alt="Theme 1 Logo" className="theme-logo" />
          <p className="theme-name">Health Care</p>
          <p className="theme-description">Description of Theme 1. This is a three-line description to explain the theme.</p>
        </div>
      </MagneticEffect>
      <MagneticEffect>
        <div className="theme-card">
          <img src={logo2} alt="Theme 2 Logo" className="theme-logo" />
          <p className="theme-name">Space Tech</p>
          <p className="theme-description">Description of Theme 2. This is a three-line description to explain the theme.</p>
        </div>
      </MagneticEffect>
      <MagneticEffect>
        <div className="theme-card">
          <img src={logo3} alt="Theme 3 Logo" className="theme-logo" />
          <p className="theme-name">Block Chain</p>
          <p className="theme-description">Description of Theme 3. This is a three-line description to explain the theme.</p>
        </div>
      </MagneticEffect>   
      </div>
      
      <div className="themes-row">
      <MagneticEffect>  
        <div className="theme-card">
          <img src={logo4} alt="Theme 4 Logo" className="theme-logo" />
          <p className="theme-name">IOT Tech</p>
          <p className="theme-description">Description of Theme 4. This is a three-line description to explain the theme.</p>
        </div>
      </MagneticEffect>  
      <MagneticEffect>
        <div className="theme-card">
          <img src={logo5} alt="Theme 5 Logo" className="theme-logo" />
          <p className="theme-name">Open Innovation</p>
          <p className="theme-description">Description of Theme 5. This is a three-line description to explain the theme.</p>
        </div>
      </MagneticEffect>  
      <MagneticEffect>
        <div className="theme-card">
          <img src={logo6} alt="Theme 6 Logo" className="theme-logo" />
          <p className="theme-name">Environmental</p>
          <p className="theme-description">Description of Theme 6. This is a three-line description to explain the theme.</p>
        </div>
      </MagneticEffect>  
      </div>
    </div>
  );
};

export default Carousel;