import "../styles/Campus.css";
export default function Campus() {
  return (

    <div>
      <div className="Campus-background-container">
       <div className="Campus-overlay-text">Campus Ambassador MUJIIC. Be the leader of your Campus
        <button className="Campus-apply-btn">Apply</button>
       </div>
      </div>

      <div>
      <h2 className="Campus-WhyIIC">Why participate in IIC?</h2>
      <div className="Campus-WhyIIC-container">
      <div className="Campus-WhyIIC-reasons">Reason 1</div>
      <div className="Campus-WhyIIC-reasons">Reason 2</div>
      <div className="Campus-WhyIIC-reasons">Reason 3</div>
      <div className="Campus-WhyIIC-reasons">Reason 4</div>
      <div className="Campus-WhyIIC-reasons">Reason 5</div>
      <div className="Campus-WhyIIC-reasons">Reason 6</div>
      </div></div>
      
      <h2 className="Campus-Ambassador azerec">Campus Ambassador in 3 simple steps</h2>

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
          <p>Get your referral code and start promoting, and enjoy perks.</p>
        </div>


      <div className="Campus-bg-IIC">
      <div className="Campus-glass-overlay">
        <h1 className="azerec">IIC </h1>
        <p className="azerec">Campus Ambassador</p>
      </div>
    </div>

        <div className="Campus-large-rectangle">
          <p className="azerec">Become a MujHackx Campus Ambassador today!</p>
          <button className="Campus-apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
    
  )
}