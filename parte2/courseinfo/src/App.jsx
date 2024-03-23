import "./App.css";

const Header = ({ course }) => <h1>{course.name}</h1>;

const Part = ({ part }) => {
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total sum={parts} />
    </div>
  );
};

const Total = ({ sum }) => {
  const totalExercises = sum.reduce(
    (total, part) => total + part.exercises,
    0
  );
  return (
    <div>
      <p className="bold">Number of exercises {totalExercises}</p>
    </div>
  );
};
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Creation of RESTful APIs with Node.js and Express",
        exercises: 12,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
