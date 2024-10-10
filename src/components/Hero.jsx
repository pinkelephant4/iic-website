import '../styles/Hero.css'
import MagneticEffect from './Magnetic'

const Hero = () => {

  const days = () => {
    const today = new Date();
    const hackDate = new Date(today.getFullYear(), 10, 15);
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
          <br />

          <div className="Hackathon">
            <span>Hackathon</span>
            <div className="Hackathon-36">
              <span>36 Hours Offline</span>
            </div>
            <div className="Hourglass-image">
              <img src="/assets/hourglass.png" alt="hourglass" />
            </div>  
          </div>

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
              <a href="https://www.instagram.com/iicmuj?igsh=MnZsaWhsa2dqZXFl">
              <img src="/assets/insta-b.svg" alt="Instagram" className='hero-bottom-icon' />
              </a>
            </MagneticEffect>

            <MagneticEffect>
              <a href="">
              <img src="/assets/linkedin-b.svg" alt="LinkedIn" className='hero-bottom-icon' />
              </a>
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
                  <a href='https://unstop.com/hackathons/international-innovation-challengehackathon-manipal-university-jaipur-1174688?lb=CtnnOKei' className='hero-right-btn-link'> Register Now </a>
                </div>
              </MagneticEffect>
              <div className='hero-bottom-right-about' >

                <span>About</span>
                <p>
                  The International Innovation Challenge (IIC) is a premier global hackathon that brings together bright minds from top universities to solve real-world industry challenges. Organized by Manipal University in collaboration with other key partners, IIC focuses on critical areas like cybersecurity, sustainability, and digital transformation.
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