import { useState, useEffect, useRef } from 'react';
import "../styles/Guest.css";

const Guest = () => {
  const guests = [
    { name: "John Doe", description: "A leader in renewable energy solutions who promotes clean energy technologies. He shares his knowledge through public speaking engagements. His goal is to inspire others to embrace renewable energy. He advocates for policy changes to support sustainability. In his leisure time, he enjoys cycling and woodworking.", image: "/assets/Guest.jpg" },
    { name: "Jane Smith", description: "A leader in renewable energy solutions who promotes clean energy technologies. He shares his knowledge through public speaking engagements. His goal is to inspire others to embrace renewable energy. He advocates for policy changes to support sustainability. In his leisure time, he enjoys cycling and woodworking.", image: "/assets/Guest.jpg" },
    { name: "Alice Johnson", description: "A leader in renewable energy solutions who promotes clean energy technologies. He shares his knowledge through public speaking engagements. His goal is to inspire others to embrace renewable energy. He advocates for policy changes to support sustainability. In his leisure time, he enjoys cycling and woodworking.", image: "/assets/Guest.jpg" },
    { name: "Michael Brown", description: "A leader in renewable energy solutions who promotes clean energy technologies. He shares his knowledge through public speaking engagements. His goal is to inspire others to embrace renewable energy. He advocates for policy changes to support sustainability. In his leisure time, he enjoys cycling and woodworking.", image: "/assets/Guest.jpg" },
    { name: "Emily Davis", description: "A leader in renewable energy solutions who promotes clean energy technologies. He shares his knowledge through public speaking engagements. His goal is to inspire others to embrace renewable energy. He advocates for policy changes to support sustainability. In his leisure time, he enjoys cycling and woodworking.", image: "/assets/Guest.jpg" },
    { name: "Chris Lee", description: "A leader in renewable energy solutions who promotes clean energy technologies. He shares his knowledge through public speaking engagements. His goal is to inspire others to embrace renewable energy. He advocates for policy changes to support sustainability. In his leisure time, he enjoys cycling and woodworking.", image: "/assets/Guest.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const totalSlides = guests.length;

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, 3000); // Slide changes every 3 seconds
  };

  useEffect(() => {
    resetInterval(); // Start interval on component mount

    return () => clearInterval(intervalRef.current); // Clear interval on component unmount
  }, []);

  useEffect(() => {
    if (currentIndex === totalSlides + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500); // Match this to the transition duration
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalSlides);
      }, 500); // Match this to the transition duration
    }
  }, [currentIndex, totalSlides]);

  const handlePrevClick = () => {
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => prevIndex - 1);
    resetInterval(); // Reset interval on manual control
  };

  const handleNextClick = () => {
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => prevIndex + 1);
    resetInterval(); // Reset interval on manual control
  };

  return (
    <div className="guest-speaker-container">
      <h1 className="component-heading">Guest Speakers</h1>
      <div
        className="guest-wrapper"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 0.5s ease' : 'none'
        }}
      >
        {/* Clone the last slide and place it at the beginning */}
        <div className="guest-section">
          <div className="info-section">
            <h3 className="guest-name">{guests[totalSlides - 1].name}</h3>
            <p className="guest-description">{guests[totalSlides - 1].description}</p>
          </div>
          <div className="image-section">
            <img src={guests[totalSlides - 1].image} alt={guests[totalSlides - 1].name} className="guest-image" />
          </div>
        </div>

        {guests.map((guest, index) => (
          <div className="guest-section" key={index}>
            <div className="info-section">
              <h3 className="guest-name">{guest.name}</h3>
              <p className="guest-description">{guest.description}</p>
            </div>
            <div className="image-section">
              <img src={guest.image} alt={guest.name} className="guest-image" />
            </div>
            <div className="coming-soon-overlay">Coming Soon</div> {/* Overlay for hover */}
          </div>
        ))}

        {/* Clone the first slide and place it at the end */}
        <div className="guest-section">
          <div className="info-section">
            <h3 className="guest-name">{guests[0].name}</h3>
            <p className="guest-description">{guests[0].description}</p>
          </div>
          <div className="image-section">
            <img src={guests[0].image} alt={guests[0].name} className="guest-image" />
          </div>
        </div>
      </div>
      
      {/* Arrow controls */}
      <div className="arrow left-arrow" onClick={handlePrevClick}>
        &#10094; {/* Left arrow symbol */}
      </div>
      <div className="arrow right-arrow" onClick={handleNextClick}>
        &#10095; {/* Right arrow symbol */}
      </div>
    </div>
  );
};

export default Guest;