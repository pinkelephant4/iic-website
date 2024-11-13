import "../styles/Card.css";

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt="Card image" className="card-image" />
    </div>
  );
};

export default Card;
