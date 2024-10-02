import React from 'react';
import '/src/styles/WelcomePage.css'; // Import the CSS file

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      {/* Heading */}
      <div className="welcome-heading">
        <h1 className="welcome-to">Welcome to</h1>
        <h1 className="challenge-heading">International Innovation Challenge</h1>
      </div>

      {/* Description with two lines */}
      <div className="welcome-description">
        <p className="description-line">Where Global Minds Unite to Innovate, Create, and Shape the</p>
        <span className="description-line second-line">Future of Tomorrow!</span>
      </div>
      
      {/* Bold Text with Images - Split into three lines with individual image containers */}
      <div className="bold-text-with-images">
        <p>
          We 
          <div className="image-container image1">
            <img src="/assets/Manipal.png" alt="logo1" />
          </div>
          are a University
        </p>
        <p>
          <div className="image-container image2">
            <img src="/assets/Manipal2.png" alt="logo2" />
          </div>
          who cares
          <div className="image-container image3">
            <img src="/assets/Manipal3.png" alt="logo3" />
          </div>
          about
        </p>
        <p>
          <div className="image-container image4">
            <img src="/assets/Manipal4.png" alt="logo4" />
          </div>
          your 
          <div className="image-container image5">
            <img src="/assets/Manipal5.png" alt="logo5" />
          </div>
          growth
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
