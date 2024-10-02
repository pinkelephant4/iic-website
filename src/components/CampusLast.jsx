import React from 'react';
import '/src/styles/CampusLast.css'; // Import the CSS file

const CampusLast = () => {
  return (
    <div>
    <h1 className='CampusLast-Heading'>Your Perks as Campus Ambassador</h1> 
      <div className="CampusLast-container">
      <div className="CampusLast-box">
        <img src="path_to_your_icon/icon1.png" alt="icon" className="CampusLast-icon" />
        <div className="CampusLast-box-number">1</div>
        <h2 className='CampusLast-h2'>AIC Incubation</h2>
        <p>Top 1-2 ambassadors will get the change to incubate at Atal Incubation Center</p>
      </div>
      <div className="CampusLast-box">
        <img src="path_to_your_icon/icon2.png" alt="icon" className="CampusLast-icon" />
        <div className="CampusLast-box-number">2</div>
        <h2 className='CampusLast-h2'>Exclusive Goodies</h2>
        <p>Top 5 campus ambassador will receive exclusive goodies.</p>
      </div>
      <div className="CampusLast-box">
        <img src="path_to_your_icon/icon3.png" alt="icon" className="CampusLast-icon" />
        <div className="CampusLast-box-number">3</div>
        <h2 className='CampusLast-h2'>Letter of Recommendation </h2>
        <p>Campus ambassadors who successfully bring 20+ teams will be eligible for LOR</p>
      </div>
      <div className="CampusLast-box">
        <img src="path_to_your_icon/icon4.png" alt="icon" className="CampusLast-icon" />
        <div className="CampusLast-box-number">4</div>
        <h2 className='CampusLast-h2'>Certificate</h2>
        <p>CAs who bring in 5+ registrations will be awarded with a certificate of appreciation</p>
    </div>

    </div>
    <h1>You are just 3 Steps away from <br></br> becoming a part of this journey </h1>

    {/* vertical box */}
    <div className="vertical-box-container">
      <div className="vertical-box">
        <div className="vertical-box-number">01</div>
        <h3 className="vertical-box-heading">Register</h3>
        <p className="vertical-para">Fill in your details and register yourself</p>
      </div>
      <div className="vertical-box-separator"></div>
      <div className="vertical-box">
        <div className="vertical-box-number">02</div>
        <h3 className="vertical-box-heading">Get and email of confirmation</h3>
        <p className="vertical-para">You will get an confirmation email from us</p>
      </div>
      <div className="vertical-box-separator"></div>
      <div className="vertical-box">
        <div className="vertical-box-number">03</div>
        <h3 className="vertical-box-heading">Hurray</h3>
        <p className="vertical-para">You will receive a referral code for promotion</p>
      </div>
    </div>

    </div>
  );
};

export default CampusLast;
