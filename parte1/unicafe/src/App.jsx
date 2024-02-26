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
  return (
    <div>
      <StatiticItem text={"Good"} value={clicks.good} />
      <StatiticItem text={"Neutral"} value={clicks.neutral} />
      <StatiticItem text={"Bad"} value={clicks.bad} />
    </div>
  );
};
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleGoodClick = () => {
    setClicks({ ...clicks, good: clicks.good + 1 });
  };

  const handleNeutraldClick = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });
  };

  const handleBadClick = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1 });
  };
  return (
    <div>
      <TitleSection caption={"Give Feedback"} />
      <Button handleClick={handleGoodClick} text={"Good"} />
      <Button handleClick={handleNeutraldClick} text={"Neutral"} />
      <Button handleClick={handleBadClick} text={"Bad"} />
      <TitleSection caption={"Statistics"} />
      <Statistics clicks={clicks} />
    </div>
  );
};

export default App;
