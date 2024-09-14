import "../styles/Campus.css";
export default function Campus() {
  return (
    <div><h2 className="Campus-Ambassador azerec">Campus Ambassador in 3 simple steps</h2>

      <div className="campus-container">

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

        <img className="c" src="/assets/c.png" alt="image" />
        
        <div className="Campus-large-rectangle">
          <p className="azerec">Become a MujHackx Campus Ambassador today!</p>
          <button className="Campus-apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
  )
}