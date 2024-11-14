import { useState, useEffect, useRef } from 'react';
import "../styles/Guest.css";

const Guest = () => {
  const guests = [
    { name: "Sh. Nilesh Desai", description: "Shri Nilesh M. Desai, a distinguished scientist and Director of ISRO’s Space Applications Centre (SAC), has over 37 years of experience in engineering and research, specializing in microwave radar systems for ISRO missions like RISAT, NISAR, and Oceansat. His work has strengthened earth observation, satellite navigation (NavIC), and advanced satellite communications for societal, governance, and strategic applications. A gold-medalist in Electronics & Communication from Gujarat University, he has guided and mentored digital design teams across SAC and promoted indigenous navigation technologies. Desai is widely recognized with awards including the IESA Dr. APJ Abdul Kalam Award and DVCon-India Lifetime Achievement Award.", image: "/assets/Guest1.png" },
    { name: "Sh. Darshan K Patel", description: "Darshankumar K. Patel, Senior Scientist/Engineer and Group Director of Cyber Services & Information Security at SAC-ISRO, has over 35 years of experience at ISRO. A gold-medalist in Electronics Engineering from Birla Vishwakarma Vidhyalaya, he initially contributed to the development of ground systems for INSAT meteorological payloads like VHRR and IMAGER. As Deputy Project Director, he operationalized the Meteorological Data Reception System for IMD. Currently, he leads IT, Data Center, network infrastructure, and cyber security at SAC. His work spans data acquisition, processing, and the MOSDAC web portal, alongside advanced visualization technologies like AR and VR.", image: "/assets/Guest2.png" },
    { name: "Sh. Raj Tomar", description: "Shri Raj Tomar serves as Vice President at TALSMART, a company dedicated to enhancing growth for IT and software firms through specialized sales training and recruitment services. With over 5 years of experience, Raj excels in strategic sales planning, account management, and closing complex deals, focusing on the U.S. market. His expertise lies in building trust with clients and driving transformative business growth. At TALSMART, Raj leads initiatives to recruit top-tier sales talent and provides tailored sales coaching.", image: "/assets/Guest3.png" },
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