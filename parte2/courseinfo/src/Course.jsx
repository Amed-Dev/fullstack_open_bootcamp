const Header = ({ course }) => <h2>{course.name}</h2>;

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
  const totalExercises = sum.reduce((total, part) => total + part.exercises, 0);
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


export default Course;