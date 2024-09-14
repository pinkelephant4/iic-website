export default function Campus() {
  return (
    <div><h2 className="Campus-Ambassador azerec">Campus Ambassador in 3 simple steps</h2>

      <div className="campus-container">

        <div className="rectangle">
          <div className="circle">1</div>
          <p>Fill in the form with all your details.</p>
        </div>
        <div className="rectangle">
          <div className="circle">2</div>
          <p>Once you receive mail. You are officially a Campus Ambassador</p>
        </div>
        <div className="rectangle">
          <div className="circle">3</div>
          <p>Get your referral code and start promoting, and enjoy perks.</p>
        </div>

        <img className="c" src="../public/c.png" alt="image" />



        <div className="large-rectangle">
          <p className="azerec">Become a MujHackx Campus Ambassador today!</p>
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
  )
}