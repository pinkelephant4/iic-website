import { useState } from "react";
import "../styles/AboutCards.css";

const AboutCards = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Initial middle card is the third one

  const cards = [
    { id: 1, content: "Experience 1" },
    { id: 2, content: "Experience 2" },
    { id: 3, content: "Experience 3" }, // Middle card
    { id: 4, content: "Experience 4" },
    { id: 5, content: "Experience 5" },
  ];

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="about-cards">
      <h1>
        Our Previous <br /> Experiences
      </h1>
      <div className="carousel">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`carousel-card ${
              index === activeIndex ? "active" : ""
            } ${index < activeIndex ? "left" : "right"} ${
              index === 0 || index === 4 ? "end" : " "
            }`}
            onClick={() => handleCardClick(index)}
          >
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCards;
