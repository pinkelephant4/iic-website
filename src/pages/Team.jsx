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
      <Patron head={"Patron"} cards={2} color={"#bc9ad9"} height={"100vh"} />
      <Patron head={"Co-Patron"} cards={3} color={"#eae9ff"} height={"120vh"} />
      <Patron
        head={"General Chair"}
        cards={1}
        color={"#bc9ad9"}
        height={"80vh"}
      />
      <Patron
        head={"Program Chair"}
        cards={2}
        color={"#eae9ff"}
        height={"100vh"}
      />
      <Patron
        head={"Faculty Coordinators"}
        cards={3}
        color={"#bc9ad9"}
        height={"130vh"}
      />
      <Patron head={"Conveners"} cards={3} color={"#eae9ff"} height={"120vh"} />
      <Patron
        head={"Advisories"}
        cards={4}
        color={"#bc9ad9"}
        height={"150vh"}
      />
    </div>
  );
};

export default Team;
