import "../styles/Sponser.css";

const Sponser = () => {
  return (
    <div className="sponser">
      <div className="sponser-header">
        <h1>IIC Official Sponsors</h1>
      </div>
      <div className="carousel">
        <div className="carousel-track">
          <div className="carousel-card knowledge-card">
            <h1>Knowledge Partner</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="carousel-card education-card1">
            <h1>Education Partner 1</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="carousel-card education-card2">
            <h1>Education Partner 2</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          {/* Duplicate cards to make the carousel infinite */}
          <div className="carousel-card knowledge-card">
            <h1>Knowledge Partner</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="carousel-card education-card1">
            <h1>Education Partner 1</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="carousel-card education-card2">
            <h1>Education Partner 2</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponser;
