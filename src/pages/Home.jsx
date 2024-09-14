import Guest from "../home/Guest";
import Carousel from "../components/Carousel";
import Sponser from "../home/Sponser";
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
