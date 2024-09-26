import Patron from "../components/Patron";
import "../styles/Team.css";

const Team = () => {
  return (
    <div className="team">
      <div className="heading1">
        <h1>Team Members</h1>
      </div>
      <div className="heading2">
        <h1 className="first">International Innovation</h1>
        <h1 className="second">Challenge 2024</h1>
      </div>
        <Patron/>
    </div>
  )
}

export default Team