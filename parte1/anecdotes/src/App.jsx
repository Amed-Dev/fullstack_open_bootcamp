import { useState } from "react";

const Button = ({ handleClik, text }) => {
  return <button onClick={handleClik}>{text}</button>;
};

const AnecdoteViewer = ({ votes, anecdotes, title, children }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="anecdote">{anecdotes}</div>
      <div className="votes">Has ⭐ {votes} votes</div>
      <div>{children}</div>
    </div>
  );
};

const HighestScore = ({ title, anecdotes, votes }) => {
  const maxScore = Math.max(...votes);
  const indexAnecdote = votes.indexOf(maxScore);
  const AnecdoteWithTheHighestScore = anecdotes[indexAnecdote];

  if (maxScore === 0) {
    return (
      <div className="card not-grid alert-warning ">
        <p>No votes yet</p>
      </div>
    );
  }
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="anecdote">{AnecdoteWithTheHighestScore}</div>
      <div className="votes">Has ⭐ {maxScore} votes</div>
    </div>
  );
};
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const HandleClickNext = () => {
    const RandomSelect = Math.floor(Math.random() * anecdotes.length);
    setSelected(RandomSelect);
  };
  const HandleClickVote = () => {
    const newVote = [...votes];
    newVote[selected] += 1;
    setVotes(newVote);
  };
  return (
    <div className="container">
      <AnecdoteViewer
        title="Anecdote of the day"
        anecdotes={anecdotes[selected]}
        votes={votes[selected]}>
        <Button handleClik={HandleClickVote} text={"⭐Vote"} />
        <Button handleClik={HandleClickNext} text={"Next anecdote"} />
      </AnecdoteViewer>
      <HighestScore
        title={"Anecdote with most votes"}
        anecdotes={anecdotes}
        votes={votes}
      />
    </div>
  );
};

export default App;
