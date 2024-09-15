import "../styles/Person.css";

const Person = (props) => {
  return (
    <>
    <div className="container">
    <div className="box">
    <div className="imgBox">
        <img src={props.img} alt=""/>
    </div>
    <div className="person-content">
        <h2>{props.name}<br/>
        <span>{props.post}</span></h2>
    </div>
</div>
</div>
</>
  );
};

export default Person;
