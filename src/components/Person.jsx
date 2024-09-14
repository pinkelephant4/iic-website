import "./Person.css";

const Person = (props) => {
  return (
    <div className="guest-card">
      <div className="guest-img"></div>
      <div className="guest-text">
        <h2>{props.name}</h2>
        <h3>{props.about}</h3>
        <h4>{props.post}</h4>
      </div>
    </div>
  );
};

export default Person;
