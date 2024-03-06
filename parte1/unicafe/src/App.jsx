import { useState } from "react";

const TitleSection = ({ caption }) => <h1>{caption}</h1>;
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatiticItem = ({ text, value }) => (
  <p>
    {text}: {value}
  </p>
);

const Statistics = ({ clicks }) => {
  const total = clicks.good + clicks.neutral + clicks.bad;
  const average = total === 0 ? 0: (clicks.good * 1 + clicks.bad * -1) / total;
  const positive = total === 0 ? 0: (clicks.good / total) * 100;
  if (total === 0){
    return (<p>No feedback given</p>)
  }
  return (
    <div>
      <StatiticItem text={"Good"} value={clicks.good} />
      <StatiticItem text={"Neutral"} value={clicks.neutral} />
      <StatiticItem text={"Bad"} value={clicks.bad} />
      <StatiticItem text={"All"} value={total} />
      <StatiticItem text={"Average"} value={average} />
      <StatiticItem text={"Positive"} value={`${positive}%`} />
    </div>
  );
};
const App = () => {
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleGoodClick = () => {
    setClicks({ ...clicks, good: clicks.good + 1 });
  };

  const handleNeutralClick = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });
  };

  const handleBadClick = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1 });
  };
  return (
    <div>
      <TitleSection caption={"Give Feedback"} />
      <Button handleClick={handleGoodClick} text={"Good"} />
      <Button handleClick={handleNeutralClick} text={"Neutral"} />
      <Button handleClick={handleBadClick} text={"Bad"} />
      <TitleSection caption={"Statistics"} />
      <Statistics clicks={clicks} />
    </div>
  );
};

export default App;
