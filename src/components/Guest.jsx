import { useState, useEffect, useRef } from 'react';
import "../styles/Guest.css";

const Guest = () => {
  const guests = [
    { name: "John Doe", description: "An experienced speaker in technology and innovation. He has transformed startups into successful tech companies. His insights on emerging technologies are sought after globally. John is also a mentor for young entrepreneurs. He believes in leveraging technology to solve real-world problems. His workshops focus on practical skills for the tech-savvy. Outside of work, he enjoys hiking and photography.", image: "/assets/Guest.jpg" },
    { name: "Jane Smith", description: "A renowned expert in environmental science with multiple publications on climate change. Her innovative approaches to conservation have garnered international recognition. She emphasizes the importance of community involvement in environmental issues. Passionate about education, she conducts workshops for students. In her free time, she loves gardening and painting.", image: "/assets/Guest.jpg" },
    { name: "Alice Johnson", description: "A passionate advocate for education reform, Alice has worked tirelessly to improve learning opportunities. Her research focuses on integrating technology into the classroom. She believes in the power of education to change lives and communities. She collaborates with educators to implement new teaching methods. Additionally, she writes articles on educational policies. Outside of her work, Alice enjoys reading and traveling.", image: "/assets/Guest.jpg" },
    { name: "Michael Brown", description: "A leader in renewable energy solutions who promotes clean energy technologies. He shares his knowledge through public speaking engagements. His goal is to inspire others to embrace renewable energy. He advocates for policy changes to support sustainability. In his leisure time, he enjoys cycling and woodworking.", image: "/assets/Guest.jpg" },
    { name: "Emily Davis", description: "An innovator in artificial intelligence, Emily has contributed to several groundbreaking projects. Her work focuses on machine learning and its applications in everyday life. She is passionate about ethical AI and its implications for society. A strong advocate for diversity in tech, she mentors young women in STEM. In her spare time, Emily loves coding and playing video games.", image: "/assets/Guest.jpg" },
    { name: "Chris Lee", description: "A digital marketing guru who helps brands build their online presence. His insights on digital trends are highly valued in the industry. He believes in data-driven strategies to achieve measurable results. He also writes a popular blog on digital marketing tips. When not working, Chris enjoys photography and exploring new restaurants.", image: "/assets/Guest.jpg" },
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
