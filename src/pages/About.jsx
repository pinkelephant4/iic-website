import AboutCards from "../components/AboutCards";
import AboutHeader from "../components/AboutHeader";
import "../styles/About.css";

const About = ({ setActive }) => {
  setActive("about");

  return (
    <div className="about">
      <AboutHeader />
      <AboutCards />
    </div>
  );
};

export default About;
