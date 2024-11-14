import Patron from "../components/Patron";
import "../styles/Team.css";

const Team = ({ setActive }) => {
  setActive("team")

  return (
    <div className="team">
      <div className="heading1">
        <h1>Team Members</h1>
      </div>
      <div className="heading2">
        <h1 className="first">International Innovation</h1>
        <h1 className="second">Challenge 2024</h1>
      </div>
      <Patron head={"Patron"} cards={2} color={"#bc9ad9"} height={"100vh"} images={["assets/patron2.png", "assets/patron1.png"]}/>
      <Patron head={"Co-Patron"} cards={2} color={"#eae9ff"} height={"120vh"} images={["assets/copatron1.png", "assets/copatron2.png"]}/>
      <Patron
        head={"General Chair"}
        cards={1}
        color={"#bc9ad9"}
        height={"80vh"}
        images={["assets/generalchair.png"]}
      />
      <Patron
        head={"Program Chair"}
        cards={3}
        color={"#eae9ff"}
        height={"100vh"}
        images={["assets/programchair1.png","assets/programchair2.png","assets/programchair3.png"]}
      />
      <Patron
        head={"Faculty Conveners"}
        cards={3}
        color={"#bc9ad9"}
        height={"130vh"}
        images={["assets/fc1.png","assets/fc2.png","assets/fc3.png"]}
      />
      <Patron head={"Advisories"} cards={2} color={"#eae9ff"} height={"120vh"} images={["assets/sa1.png", "assets/sa2.png"]}/>
      <Patron
        head={"Student Conveners"}
        cards={3}
        color={"#bc9ad9"}
        height={"150vh"}
        images={["assets/sc1.png","assets/sc2.png","assets/sc3.png"]}
      />
      <Patron
        cards={3}
        color={"#bc9ad9"}
        height={"150vh"}
        images={["assets/sc4.png","assets/sc5.png","assets/sc6.png"]}
      />
      <Patron
        head={"Celebal Technologies"}
        cards={3}
        color={"#eae9ff"}
        height={"150vh"}
        images={["assets/cg1.png","assets/cg2.png","assets/cg3.png"]}
      />
      <Patron
        cards={3}
        color={"#eae9ff"}
        height={"150vh"}
        images={["assets/cg4.png","assets/cg5.png","assets/cg6.png"]}
      />
      <Patron
        head={"TalSmart"}
        cards={1}
        color={"#bc9ad9"}
        height={"150vh"}
        images={["assets/tg1.png"]}
      />
    </div>
  );
};

export default Team;
