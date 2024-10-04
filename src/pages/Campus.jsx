import CampusHero from "../components/CampusHero";
import WelcomePage from "../components/WelcomePage";
import CampusLast from "../components/CampusLast";
import "../styles/Campus.css";

export default function Campus({ setActive }) {
  setActive("ambassador")

  return (
    <div>
      <CampusHero/>
      <WelcomePage/>
      <CampusLast/>
    </div>
  );
}
