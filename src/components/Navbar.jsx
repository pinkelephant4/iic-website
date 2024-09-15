import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <h1>LOGO</h1>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/ambassador">Ambassador</Link>
        <Link to="/team">Team</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/faqs">Faqs</Link>
      </div>
      <div className="nav-right">
        <a href="">Problem Statements</a>
      </div>
    </div>
  );
};

export default Navbar;
