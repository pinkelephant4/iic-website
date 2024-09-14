import Guest from "../components/Guest";
import Carousel from "../components/Carousel";
import Sponser from "../components/Sponser";
import Faq from "../components/Faq";

function Home() {
  return (
    <>
      <div>
        <Carousel />
        <Guest />
        <Sponser />
        <Faq />
      </div>
    </>
  );
}

export default Home;
