import Accordion from "react-bootstrap/Accordion";
import "../styles/Faq.css";

const faqData = [
  {
    eventKey: "0",
    question: "1. Who can participate in IIC ?",
    answer:
      "The IIC is open to students and innovators from India’s premier universities and international institutions.",
  },
  {
    eventKey: "1",
    question: "2. Can I participate as an individual or do I need a team ?",
    answer: "Participants need a team of minimum 2 and maximum 3 members.",
  },
  {
    eventKey: "2",
    question: "3. What is the participation fee ?",
    answer: "The participation fee is Rs. 500 per team.",
  },
  {
    eventKey: "3",
    question: "4. What opportunities does the IIC offer for participants ?",
    answer:
      "IIC provides participants with the chance to collaborate with industry experts, gain mentorship, and showcase their innovations on a global platform. Winning teams will receive exciting prizes and the opportunity for further mentorship.",
  },
];

function Faq() {
  return (
    <div className="faq">
      <h1 style={{ margin: "0 0 2rem 0" }}>Frequently Asked Questions</h1>
      <Accordion className="faq-wrapper">
        {faqData.map((item) => (
          <Accordion.Item
            eventKey={item.eventKey}
            className="faq-body"
            key={item.eventKey}
          >
            <Accordion.Header className="question">
              {item.question}
            </Accordion.Header>
            <Accordion.Body className="answer">{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Faq;
