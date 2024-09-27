import Copatron from "../components/Copatron";
import Patron from "../components/Patron";
import StudentConvener from "../components/StudentConvener";
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
        <Copatron/>


{/* add remaining components before student convener */}
        <StudentConvener/> 
    </div>
  )
}

export default Team
