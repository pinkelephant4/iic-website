import Guest from "../components/Guest";
import Carousel from "../components/Carousel";
import Sponser from "../components/Sponser";
import Faq from "../components/Faq";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <div>
        <Hero/>
        <Carousel />
        <Guest />
        <Sponser />
        <Faq />
      </div>
    </>
  );
}

export default Home;
