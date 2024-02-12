const Greeting = (props) => {
  let studentStatus;
  if (props.isStudent) {
    studentStatus = "You're a student!";
  } else {
    studentStatus = "You're not a student.";
  }

  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age: {props.age} years old.</p>
      <p>{studentStatus}</p>
    </div>
  );
};

export default Greeting;
