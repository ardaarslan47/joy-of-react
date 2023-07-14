import React from "react";
import { answer } from "../Game/Game";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ guesses, setGuesses, status, setStatus }) {
  const [guess, setGuess] = React.useState("");

  const handleStatus = (e) => {
    var nextStatus;
    if (guess === answer) {
      nextStatus = "win";
    } else if (e.length === NUM_OF_GUESSES_ALLOWED) {
      nextStatus = "lost";
    } else {
      nextStatus = "progress";
    }
    setStatus(nextStatus);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextGuesses = [...guesses];
    nextGuesses.push(guess);
    setGuesses(nextGuesses);
    handleStatus(nextGuesses);
    setGuess("");
  };

  const handleChange = (e) => {
    const nextGuess = e.target.value.toUpperCase();
    if (
      (!!nextGuess && !/[A-Z]/.test(nextGuess.slice(-1))) ||
      nextGuess.length > 5
    ) {
      return;
    }
    setGuess(nextGuess);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern="[A-Z]{5}"
        required
        disabled={status !== "progress"}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
}

export default GuessInput;
