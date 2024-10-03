// Footer.js
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-line"></div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/timeline">Timeline</Link> */}
        <Link to="/ambassador">Ambassador</Link>
        <Link to="/team">Team</Link>
        {/* <Link to="/gallery">Gallery</Link> */}
        {/* <Link to="/faqs">Faqs</Link> */}
      </div>
      <div className="footer-body">
        <div className="content">
          <img src="/assets/iic logo bg removed 2.png" alt="" />
          <div className="footer-icons">
            <a href="">
              <BsTwitter />
            </a>
            <a href="">
              <BsLinkedin />
            </a>
            <a href="https://www.instagram.com/iicmuj?igsh=MnZsaWhsa2dqZXFl" target="_blank" rel="noopener noreferrer">
              <BsInstagram />
            </a>
            <a href="">
              <BsFacebook />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>©2024 IICMUJ, All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
