import Guest from "../components/Guest";
import Carousel from "../components/Carousel";
import Sponser from "../components/Sponser";
import Faq from "../components/Faq";
import Hero from "../components/Hero";

function Home() {
  return (
    <>

      <Hero />
      <Carousel />
      { <Guest /> }
      <Sponser />
      <Faq />

    </>
  );
}

export default Home;
