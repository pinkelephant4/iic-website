import "../styles/Campus.css";

export default function Campus() {
  return (
    <div>
      <div className="Campus-background-container">
        <div className="Campus-overlay-text">
          Campus Ambassador IIC. Be the leader of your Campus
          <br />
          <button className="Campus-apply-btn">Apply</button>
        </div>
      </div>

      <div>
        <h2 className="Campus-WhyIIC">Why participate in IIC?</h2>
        <div className="Campus-WhyIIC-container">
          <div className="Campus-WhyIIC-reasons">
            <img src="" alt="" />
            <p>Network with peers, mentors, and recruiters.</p>
          </div>

          <div className="Campus-WhyIIC-reasons">
            <img src="" alt="" />
            <p>Gain real-world experience on real problems</p>
          </div>

          <div className="Campus-WhyIIC-reasons">
            <img src="" alt="" />
            <p>Sharpen problem-solving under time pressure.</p>
          </div>

          <div className="Campus-WhyIIC-reasons">
            <img src="" alt="" />
            <p>Explore New Tools and Trends</p>
          </div>

          <div className="Campus-WhyIIC-reasons">
            <img src="" alt="" />
            <p>Innovate and think outside the box.</p>
          </div>

          <div className="Campus-WhyIIC-reasons">
            <img src="" alt="" />
            <p>Build your portfolio with tangible projects.</p>
          </div>
        </div>
      </div>

      <h2 className="Campus-Ambassador">Campus Ambassador in 3 simple steps</h2>

      <div className="Campus-container">
        <div className="Campus-rectangle">
          <div className="Campus-circle">1</div>
          <p>Fill in the form with all your details.</p>
        </div>
        <div className="Campus-rectangle">
          <div className="Campus-circle">2</div>
          <p>Once you receive mail. You are officially a Campus Ambassador</p>
        </div>
        <div className="Campus-rectangle">
          <div className="Campus-circle">3</div>
          <p>Get your referral code, start promoting, and enjoy perks.</p>
        </div>

        <div className="Campus-bg-IIC">
          <div className="Campus-glass-overlay">
            <h1>IIC</h1>
            <p>Campus Ambassador</p>
          </div>
        </div>

        <div className="Campus-large-rectangle">
          <p>Become IIC Campus Ambassador today!</p>
          <button className="Campus-apply-btn">Apply</button> {/* Added second button */}
        </div>
      </div>
    </div>
  );
}
