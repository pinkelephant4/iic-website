import "../styles/Carousel.css";

import logo1 from "/Theme/Heath.png";
import logo2 from "/Theme/rocket.png";
import logo3 from "/Theme/BlockChain.png";
import logo4 from "/Theme/IOT.png";
import logo5 from "/Theme/OpenInnovation.png";
import logo6 from "/Theme/World.png";
import logo7 from "/Theme/logo7.png";
import logo8 from "/Theme/logo8.png";
import logo9 from "/Theme/logo9.png";
import logo10 from "/Theme/logo10.png";
import logo11 from "/Theme/logo11.png";
import logo12 from "/Theme/logo12.png";
import logo13 from "/Theme/logo13.png";
import logo14 from "/Theme/logo14.png";
import logo15 from "/Theme/logo15.png";
import logo16 from "/Theme/logo16.png";

const Carousel = () => {
  return (
    <div className="theme-page">
      <h1>Themes</h1>

      <div className="themes-row">
        <div className="theme-card">
          <img src={logo1} alt="Theme 1 Logo" className="theme-logo" />
          <p className="theme-name">Health Care</p>
          <p className="theme-description">Innovative solutions to enhance healthcare services, improve patient outcomes, and make healthcare accessible to all.

          </p>
        </div>
        <div className="theme-card">
          <img src={logo2} alt="Theme 2 Logo" className="theme-logo" />
          <p className="theme-name">Space Tech</p>
          <p className="theme-description">Create groundbreaking technologies for space exploration, satellite communications, or other advancements in space sciences.

          </p>
        </div>
        <div className="theme-card">
          <img src={logo3} alt="Theme 3 Logo" className="theme-logo" />
          <p className="theme-name">Block Chain</p>
          <p className="theme-description">Explore technologies to create secure, transparent, and efficient systems in various industries using blockchain technology.</p>
        </div>
      </div>

      <div className="themes-row">
        <div className="theme-card">
          <img src={logo4} alt="Theme 4 Logo" className="theme-logo" />
          <p className="theme-name">IOT Tech</p>
          <p className="theme-description">Develop smart, interconnected devices and systems to automate processes, collect data, and improve daily life through the Internet of Things.</p>
        </div>
        <div className="theme-card">
          <img src={logo5} alt="Theme 5 Logo" className="theme-logo" />
          <p className="theme-name">Open Innovation</p>
          <p className="theme-description">A flexible theme encouraging participants to bring diverse, creative solutions to any real-world challenge.</p>
        </div>
        <div className="theme-card">
          <img src={logo6} alt="Theme 6 Logo" className="theme-logo" />
          <p className="theme-name">Environmental</p>
          <p className="theme-description">Tackle pressing environmental issues with innovations focused on sustainability, energy efficiency, and preserving the ecosystem.</p>
        </div>
        <div className="theme-card">
          <img src={logo7} alt="Theme 7 Logo" className="theme-logo" />
          <p className="theme-name">Energy</p>
          <span className="theme-name-2">(Renewable - Non Renewable)</span>
          <p className="theme-description">Tackle pressing environmental issues with innovations focused on sustainability, energy efficiency, and preserving the ecosystem.</p>
        </div>
        <div className="theme-card">
          <img src={logo8} alt="Theme 8 Logo" className="theme-logo" />
          <p className="theme-name">Agriculture</p>
          <p className="theme-description">Tackle pressing environmental issues with innovations focused on sustainability, energy efficiency, and preserving the ecosystem.</p>
        </div>
        <div className="theme-card">
          <img src={logo9} alt="Theme 9 Logo" className="theme-logo" />
          <p className="theme-name">Water</p>
          <p className="theme-description">Tackle pressing environmental issues with innovations focused on sustainability, energy efficiency, and preserving the ecosystem.</p>
        </div>
        <div className="theme-card">
          <img src={logo10} alt="Theme 10 Logo" className="theme-logo" />
          <p className="theme-name">Education</p>
          <p className="theme-description">Tackle pressing environmental issues with innovations focused on sustainability, energy efficiency, and preserving the ecosystem.</p>
        </div>
        <div className="theme-card">
          <img src={logo11} alt="Theme 11 Logo" className="theme-logo" />
          <p className="theme-name">Sustainable</p>
          <span className="theme-name-2">Development</span>
          <p className="theme-description">A flexible theme encouraging participants to bring diverse, creative solutions to any real-world challenge.</p>
        </div>
        <div className="theme-card">
          <img src={logo12} alt="Theme 12 Logo" className="theme-logo" />
          <p className="theme-name">Smart City</p>
          <p className="theme-description">Tackle pressing environmental issues with innovations focused on sustainability, energy efficiency, and preserving the ecosystem.</p>
        </div>
        <div className="theme-card">
          <img src={logo13} alt="Theme 13 Logo" className="theme-logo" />
          <p className="theme-name">Cultural Heritage</p>
          <p className="theme-description">Tackle pressing environmental issues with innovations focused on sustainability, energy efficiency, and preserving the ecosystem.</p>
        </div>
        <div className="theme-card">
          <img src={logo14} alt="Theme 14 Logo" className="theme-logo" />
          <p className="theme-name">Tourism</p>
          <p className="theme-description">Tackle pressing environmental issues with innovations focused on sustainability, energy efficiency, and preserving the ecosystem.</p>
        </div>
        <div className="theme-card">
          <img src={logo15} alt="Theme 15 Logo" className="theme-logo" />
          <p className="theme-name">Smart Transport</p>
          <p className="theme-description">Tackle pressing environmental issues with innovations focused on sustainability, energy efficiency, and preserving the ecosystem.</p>
        </div>
        <div className="theme-card">
          <img src={logo16} alt="Theme 16 Logo" className="theme-logo" />
          <p className="theme-name">Aqua Tech</p>
          <p className="theme-description">Tackle pressing environmental issues with innovations focused on sustainability, energy efficiency, and preserving the ecosystem.</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;