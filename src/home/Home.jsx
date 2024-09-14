import Guest from "./Guest";
import Carousel from "./Carousel";
import Sponser from "./Sponser";
import Faq from "./Faq";

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
