import Accordion from 'react-bootstrap/Accordion';
import "../styles/Faq.css";

const faqData = [
  {
    eventKey: "0",
    question: "Question #1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    eventKey: "1",
    question: "Question #2",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    eventKey: "2",
    question: "Question #3",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    eventKey: "3",
    question: "Question #4",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
];

function Faq() {
  return (
    <div className="faq">
      <h1 style={{ margin: "0 0 2rem 0" }}>Frequently Asked Questions</h1>
      <Accordion className='faq-wrapper'>
        {faqData.map((item) => (
          <Accordion.Item eventKey={item.eventKey} className='faq-body' key={item.eventKey}>
            <Accordion.Header className='question'>{item.question}</Accordion.Header>
            <Accordion.Body className='answer'>
              {item.answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Faq;
