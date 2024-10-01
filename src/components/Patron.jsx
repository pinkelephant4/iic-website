import Card from "../components/Card";
import '../styles/Patron.css';
import { useEffect, useState } from "react";

const Patron = (props) => {
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
      className='patron'
      style={{
        backgroundColor: props.color,
        height: isMobile ? props.height : "65vh", // Adjust height based on screen size
      }}
    >
      <div className="header">
        <h1>{props.head}</h1>
      </div>
      <div className="content">
        {Array.from({ length: props.cards }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default Patron;
