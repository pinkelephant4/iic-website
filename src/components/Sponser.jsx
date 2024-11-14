import "../styles/Sponser.css";

const Sponser = () => {
  return (
    <div className="sponser">
      <div className="sponser-header">
        <h1>IIC Official Partners</h1>
      </div>
      <div className="carousel">
        <div className="carousel-track">
          <div className="carousel-card knowledge-card">
            <img src="/assets/ISRO.jpg" alt="" />
          </div>
          <div className="carousel-card education-card1">
            <img src="/assets/DTS.jpg" alt="" />
          </div>
          <div className="carousel-card education-card2">
            <img src="/assets/ct.jpg" alt="" />
          </div>
          <div className="carousel-card education-card2">
            <img src="/assets/ts.jpg" alt="" />
          </div>
          <div className="carousel-card education-card2">
            <img src="/assets/unstop2.png" alt="" />
          </div>
          <div className="carousel-card knowledge-card2">
            <img src="/assets/partner1.jpg" alt="" />
          </div>
          <div className="carousel-card education-card2">
            <img src="/assets/partner2.png" alt="" />
          </div>
          {/* Duplicate cards to make the carousel infinite */}
          <div className="carousel-card knowledge-card">
            <img src="/assets/ISRO.jpg" alt="" />
          </div>
          <div className="carousel-card education-card1">
            <img src="/assets/DTS.jpg" alt="" />
          </div>
          <div className="carousel-card education-card2">
            <img src="/assets/unstop2.png" alt="" />
          </div>
          <div className="carousel-card knowledge-card2">
            <img src="/assets/partner1.jpg" alt="" />
          </div>
          <div className="carousel-card education-card2">
            <img src="/assets/partner2.png" alt="" />
          </div>
          <div className="carousel-card education-card2">
            <img src="/assets/ct.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponser;
