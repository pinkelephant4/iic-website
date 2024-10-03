import '../styles/Hero.css'
import MagneticEffect from './Magnetic'

const Hero = () => {

  const days = () => {
    const today = new Date();
    const hackDate = new Date(today.getFullYear(), 10, 18);
    const difference = hackDate - today;
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return daysLeft;
  }


  return (
    <>
      <div className='hero-wrapper'>
        <img src="assets/Frame 5232.png" alt="" className='hero-bg-img' />
        <div className="hero-heading">
          <span className='hero-heading-l1'>International Innovation </span>
          <br />
          <span className='hero-heading-l2'>Challenge</span>

          <div className='unstop-div'>
            <span>co-powered by</span>
            <div className='unstop-img-div'>
              <img src="/assets/unstop2.png" alt="" />
              {/* <div className='unstop'></div> */}
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-bottom-icons">

            <MagneticEffect>
              <img src="/assets/insta-b.svg" alt="Instagram" className='hero-bottom-icon' />
            </MagneticEffect>

            <MagneticEffect>
              <img src="/assets/linkedin-b.svg" alt="LinkedIn" className='hero-bottom-icon' />
            </MagneticEffect>
          </div>

          <div className='hero-bottom-left'>
            <span className='hero-bottom-left-text'>
              Days
            </span>
            <br />
            <span className='hero-bottom-left-number'>
              {days()}
            </span>
            <span className='hero-bottom-left-text'>
              Left
            </span>
          </div>
          <div className="hero-bottom-img-container">
            <img
              src="assets/Group 7.svg"
              alt=""
              className="hero-img-line-element"
            />
            <img
              src="/assets/zkeypvVwRH2K7Yw8t6e38w 1.png"
              alt=""
              className="hero-bottom-img"
            />
          </div>
          <div className='hero-bottom-right'>
            <div className="hero-bottom-right-container">
              <MagneticEffect>
                <div className="hero-bottom-right-register-btn">
                  Register Now
                </div>
              </MagneticEffect>
              <div className='hero-bottom-right-about' >

                <span>About</span>
                <p>
                  The Wild Stone Plant is a marvel of nature. This hardy plant, known for its ability to thrive in diverse conditions, Design by Fluttertop is a testament to the resilience of life.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero