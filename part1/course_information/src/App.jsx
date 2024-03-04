const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part
        part={props.courseData[0]["name"]}
        exercises={props.courseData[0]["exercises"]}
      />
      <Part
        part={props.courseData[1]["name"]}
        exercises={props.courseData[1]["exercises"]}
      />
      <Part
        part={props.courseData[2]["name"]}
        exercises={props.courseData[2]["exercises"]}
      />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.courseData[0]["exercises"] +
        props.courseData[1]["exercises"] +
        props.courseData[2]["exercises"]}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />

      <Content courseData={course.parts} />

      <Total courseData={course.parts} />
    </div>
  );
};

export default App;
