import React from 'react';
import '/src/styles/CampusLast.css'; // Import the CSS file

const CampusLast = () => {
  return (
    <div>
    <h1 className='CampusLast-Heading'>Your Perks as Campus Ambassador</h1> 
      <div className="CampusLast-container">
      <div className="CampusLast-box">
        <img src="path_to_your_icon/icon1.png" alt="icon" className="icon" />
        <div className="CampusLast-box-number">1</div>
        <h2>Heading 1</h2>
        <p>This is some text inside box 1.</p>
      </div>
      <div className="CampusLast-box">
        <img src="path_to_your_icon/icon2.png" alt="icon" className="icon" />
        <div className="CampusLast-box-number">2</div>
        <h2>Heading 2</h2>
        <p>This is some text inside box 2.</p>
      </div>
      <div className="CampusLast-box">
        <img src="path_to_your_icon/icon3.png" alt="icon" className="icon" />
        <div className="CampusLast-box-number">3</div>
        <h2>Heading 3</h2>
        <p>This is some text inside box 3.</p>
      </div>
      <div className="CampusLast-box">
        <img src="path_to_your_icon/icon4.png" alt="icon" className="icon" />
        <div className="CampusLast-box-number">4</div>
        <h2>Heading 4</h2>
        <p>This is some text inside box 4.</p>
    </div>

    </div>

    </div>
  );
};

export default CampusLast;
