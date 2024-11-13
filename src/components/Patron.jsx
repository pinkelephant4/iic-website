import Card from "../components/Card";
import "../styles/Patron.css";
import { useEffect, useState } from "react";

const Patron = ({ head, cards, color, height, images }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="patron"
      style={{
        backgroundColor: color,
        height: isMobile ? height : "65vh", // Adjust height based on screen size
      }}
    >
      <div className="header">
        <h1>{head}</h1>
      </div>
      <div className="content">
        {Array.from({ length: cards }).map((_, index) => (
          <Card className='card' key={index} image={images[index]} />
          ))}
      </div>
    </div>
  );
};

export default Patron;
