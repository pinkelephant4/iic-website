import "../styles/Guest.css";
import Person from "../components/Person";

const Guest = () => {
  return (
    <div className="guest">
      <div className="chief-guest-header">
        <h1>CHIEF GUEST AND KEYNOTE SPEAKER</h1>
      </div>
      <div className="chief-guest-body">
        <Person name={'Hardik'} about={'A Great person and a Scientist'} post={'President of India'} img={'https://images.unsplash.com/photo-1617718860170-dd5d9f2ed43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBqJTIwYWJkdWwlMjBrYWxhbXxlbnwwfDF8MHx8fDA%3D'}/>
        <Person name={'Hardik'} about={'A Great person and a Scientist'} post={'President of India'} img={'https://images.unsplash.com/photo-1617718860170-dd5d9f2ed43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBqJTIwYWJkdWwlMjBrYWxhbXxlbnwwfDF8MHx8fDA%3D'}/>
      </div>
      <div className="judge-header">
        <h1>GUEST SPEAKER AND JUDGES</h1>
      </div>
      <div className="judge-body">
      <Person name={'Hardik'} about={'A Great person and a Scientist'} post={'President of India'} img={'https://images.unsplash.com/photo-1617718860170-dd5d9f2ed43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBqJTIwYWJkdWwlMjBrYWxhbXxlbnwwfDF8MHx8fDA%3D'}/>
      <Person name={'Hardik'} about={'A Great person and a Scientist'} post={'President of India'} img={'https://images.unsplash.com/photo-1617718860170-dd5d9f2ed43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBqJTIwYWJkdWwlMjBrYWxhbXxlbnwwfDF8MHx8fDA%3D'}/>
      <Person name={'Hardik'} about={'A Great person and a Scientist'} post={'President of India'} img={'https://images.unsplash.com/photo-1617718860170-dd5d9f2ed43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBqJTIwYWJkdWwlMjBrYWxhbXxlbnwwfDF8MHx8fDA%3D'}/>
      </div>
    </div>
  );
};

export default Guest;
