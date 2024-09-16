import { useState, useEffect } from "react";
import "../styles/Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4); // Default to 4 cards for large screens
  const totalCards = 8;
  const maxClicks = totalCards - visibleCards;

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 500) {
        setVisibleCards(1); // Show 1 card for mobile
      } else if (window.innerWidth <= 768) {
        setVisibleCards(2); // Show 2 cards for tablet
      } else {
        setVisibleCards(4); // Default to 4 cards for larger screens
      }
    };
    
    updateVisibleCards(); // Call once on component mount
    window.addEventListener("resize", updateVisibleCards); // Update when window is resized

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  const handleNext = () => {
    if (clickCount < maxClicks) {
      if (currentIndex < totalCards - visibleCards) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setClickCount((prevCount) => prevCount + 1);
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setClickCount(0); // Reset click count when moving left
    }
  };

  return (
    <div className="carousel">
      <div className="header">
        <h1>Themes</h1>
      </div>
      <div className="carousel-container">
        <button
          className="carousel-button prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &#10094;
        </button>
        <div className="wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              width: `${(totalCards * 100) / visibleCards}%`,
            }}
          >
            {[...Array(totalCards)].map((_, index) => (
              <div className="card" key={index}>
                <img
                  src={`https://picsum.photos/280/360?random=${index + 1}`}
                  alt={`Card ${index + 1}`}
                />
                <div className="info">
                  <h1>Card {index + 1}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="carousel-button next"
          onClick={handleNext}
          disabled={currentIndex >= totalCards - visibleCards}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
