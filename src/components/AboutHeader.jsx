import "../styles/AboutHeader.css";

const AboutHeader = () => {
  return (
    <div>
      <h1 className="about-heading">About Us</h1>
      <div className="first-div">
        <img src="/assets/about-1.jpg" alt="" />
      </div>
      <div className="second-div">
        <h1>International Innovation Challenge</h1>
        <p>
          The International Innovation Challenge (IIC) serves as a dynamic arena
          for students to unleash their creativity and technical skills in
          tackling pressing global issues. By uniting diverse teams from leading
          universities, the event encourages interdisciplinary collaboration,
          allowing participants to draw from a wide range of perspectives and
          expertise. <br /> In addition to fostering innovation, the IIC
          emphasizes the importance of entrepreneurship. Participants not only
          work on developing viable solutions but also learn how to pitch their
          ideas effectively, enabling them to transform their concepts into
          actionable business models. This blend of technological prowess and
          entrepreneurial spirit prepares young innovators to navigate the
          complexities of the modern business landscape.
        </p>
      </div>
      <div className="third-div">
        <p>
          The event culminates in a high-stakes final competition where teams
          present their solutions to a panel of judges, including industry
          professionals and academic leaders. Winning teams receive recognition,
          mentorship opportunities, and potential funding to help turn their
          ideas into reality.
        </p>
        <p>
          Overall, the IIC is more than just a hackathon; it is a celebration of
          innovation, creativity, and the potential of youth to influence the
          future. By providing a platform for emerging talent, IIC plays a
          crucial role in shaping the next generation of innovators and leaders
          who are poised to drive meaningful change across various industries
          worldwide.
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;
