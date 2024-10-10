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
          <p className="theme-description">Innovative solutions to enhance healthcare services, improve patient outcomes, and make healthcare accessible to all, leveraging technology for personalized treatment and efficient service delivery.</p>
        </div>
        <div className="theme-card">
          <img src={logo2} alt="Theme 2 Logo" className="theme-logo" />
          <p className="theme-name">Space Tech</p>
          <p className="theme-description">Create groundbreaking technologies for space exploration, satellite communications, and advancements in space sciences, driving innovation for future discoveries and applications.</p>
        </div>
        <div className="theme-card">
          <img src={logo3} alt="Theme 3 Logo" className="theme-logo" />
          <p className="theme-name">Block Chain</p>
          <p className="theme-description">Explore blockchain technologies to develop secure, transparent, and efficient systems across various industries, enhancing trust and accountability in operations.</p>
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
          <p className="theme-description">A flexible theme inviting participants to propose diverse, creative solutions to any real-world challenge, fostering collaboration and innovation across disciplines</p>
        </div>
        <div className="theme-card">
          <img src={logo6} alt="Theme 6 Logo" className="theme-logo" />
          <p className="theme-name">Environmental</p>
          <p className="theme-description">Tackle pressing environmental issues with innovations centered on sustainability, energy efficiency, and ecosystem preservation, driving meaningful change for a healthier planet.</p>
        </div>
        <div className="theme-card">
          <img src={logo7} alt="Theme 7 Logo" className="theme-logo" />
          <p className="theme-name">Energy</p>
          <span className="theme-name-2">(Renewable - Non Renewable)</span>
          <p className="theme-description">Explore solutions that integrate renewable and non-renewable energy, focusing on smarter grids, energy efficiency, and optimizing resources to reduce environmental impact.</p>
        </div>
        <div className="theme-card">
          <img src={logo8} alt="Theme 8 Logo" className="theme-logo" />
          <p className="theme-name">Agriculture</p>
          <p className="theme-description">Redefine agriculture with technology that enhances sustainability, efficiency, and resilient farming through data-driven solutions, improved crop management, and streamlined supply chains.</p>
        </div>
        <div className="theme-card">
          <img src={logo9} alt="Theme 9 Logo" className="theme-logo" />
          <p className="theme-name">Water</p>
          <p className="theme-description">Tackle global water challenges by developing technologies for smart monitoring, efficient irrigation, and equitable access to clean water through innovative conservation and management solutions.</p>
        </div>
        <div className="theme-card">
          <img src={logo10} alt="Theme 10 Logo" className="theme-logo" />
          <p className="theme-name">Education</p>
          <p className="theme-description">Reimagine education through technology, fostering interactive learning, improved accessibility, and AI-driven personalized pathways.</p>
        </div>
        <div className="theme-card">
          <img src={logo11} alt="Theme 11 Logo" className="theme-logo" />
          <p className="theme-name">Sustainable</p>
          <span className="theme-name-2">Development</span>
          <p className="theme-description">Develop solutions for sustainable growth that balance social, economic, and environmental needs, addressing climate change, urban development, and community resilience.</p>
        </div>
        <div className="theme-card">
          <img src={logo12} alt="Theme 12 Logo" className="theme-logo" />
          <p className="theme-name">Smart City</p>
          <p className="theme-description">Design future cities by creating smart solutions for transportation, waste management, and citizen engagement, enhancing urban efficiency and livability.</p>
        </div>
        <div className="theme-card">
          <img src={logo13} alt="Theme 13 Logo" className="theme-logo" />
          <p className="theme-name">Cultural Heritage</p>
          <p className="theme-description">Celebrate and preserve cultural heritage through immersive digital experiences, such as virtual museums and interactive storytelling, that breathe life into history and deepen connections to our shared past.</p>
        </div>
        <div className="theme-card">
          <img src={logo14} alt="Theme 14 Logo" className="theme-logo" />
          <p className="theme-name">Tourism</p>
          <p className="theme-description">Transform travel by promoting sustainable tourism that connects travelers with local cultures, reduces environmental impact, and supports local economies through better trip planning tools.</p>
        </div>
        <div className="theme-card">
          <img src={logo15} alt="Theme 15 Logo" className="theme-logo" />
          <p className="theme-name">Smart Transport</p>
          <p className="theme-description">Innovate transportation with intelligent systems that enhance mobility, reduce congestion, and explore advancements in electric vehicles, shared mobility, and traffic management for seamless experiences.</p>
        </div>
        <div className="theme-card">
          <img src={logo16} alt="Theme 16 Logo" className="theme-logo" />
          <p className="theme-name">Aqua Tech</p>
          <p className="theme-description">Dive into water innovation by developing technologies for better aquatic systems and water management, addressing challenges in aquaculture, purification, and conservation with sustainable practices.</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;