import Patron from "../components/Patron";
import "../styles/Top10.css";

const Top10 = ({ setActive }) => {
  setActive("top10");

  return (
    <div className="top10">
      <div className="top10wrapper">
        <div className="heading">
          <h1>Top 10 Rankers</h1>
        </div>
        <div className="teamlist">
          <div className="teamname">
            <h1>SILI</h1>
            <h2>Norwegian University of Science and Technology, Norway</h2>
          </div>
          <div className="teamname">
            <h1>Permutes</h1>
            <h2>Manipal University (MUJ), Jaipur</h2>
          </div>
          <div className="teamname">
            <h1>AeroVisionaries</h1>
            <h2>Chandigarh University (CU), Punjab</h2>
          </div>
          <div className="teamname">
            <h1>Tech Tribe</h1>
            <h2>G.H. Raisoni College of Engineering and Management, Pune</h2>
          </div>
          <div className="teamname">
            <h1>Nexium</h1>
            <h2>GD Goenka University, Gurugram</h2>
          </div>
          <div className="teamname">
            <h1>Smirnoff</h1>
            <h2>IMS Engineering College (IMSEC), Ghaziabad</h2>
          </div>
          <div className="teamname">
            <h1>RYM Grenergy</h1>
            <h2>GD Goenka University, Gurugram</h2>
          </div>
          <div className="teamname">
            <h1>FARIYAAD</h1>
            <h2>Thapar Institute of Engineering & Technology, Patiala</h2>
          </div>
          <div className="teamname">
            <h1>EthosCare</h1>
            <h2>
              Dr. Akhilesh Das Gupta Institute of Technology and Management, New
              Delhi
            </h2>
          </div>
          <div className="teamname">
            <h1>Code invaders</h1>
            <h2>Manipal University (MUJ), Jaipur</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top10;
