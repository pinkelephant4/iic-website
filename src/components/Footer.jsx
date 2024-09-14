// Footer.js
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-line"></div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/timeline">Timeline</Link>
          <Link to="/ambassador">Ambassador</Link>
          <Link to="/team">Team</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/faqs">Faqs</Link>
        </div>
      <div className="footer-body">
        <div className="content">
            <p>Content</p>
        </div>
      </div>
      <div className="copyright">
        <p>©2024 IICMUJ, All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
