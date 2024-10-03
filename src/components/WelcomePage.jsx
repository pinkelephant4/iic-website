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
        <div className="description-line">
        <p>Where Global Minds Unite to Innovate, Create, and Shape the</p>
        </div>
        <span className="description-line second-line">Future of Tomorrow!</span>
      </div>
      
      {/* Bold Text with Images - Split into three lines with individual image containers */}
      <div className="bold-text-with-images">
        <span>
          We 
          <div className="image-container image1">
            <img src="/assets/Manipal.png" alt="logo1" />
          </div>
          are a University
        </span>
        <span>
          <div className="image-container image2">
            <img src="/assets/Manipal2.png" alt="logo2" />
          </div>
          who cares
          <div className="image-container image3">
            <img src="/assets/Manipal3.png" alt="logo3" />
          </div>
          about
        </span>
        <span>
          <div className="image-container image4">
            <img src="/assets/Manipal4.png" alt="logo4" />
          </div>
          your 
          <div className="image-container image5">
            <img src="/assets/Manipal5.png" alt="logo5" />
          </div>
          growth
        </span>
      </div>
    </div>
  );
};

export default WelcomePage;
