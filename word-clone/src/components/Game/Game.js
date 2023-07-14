import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Banner({ status, guessCount }) {
  if (status === "win") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {guessCount === 1 ? " 1 guess" : ` ${guessCount} guesses`}
          </strong>
          .
        </p>
      </div>
    );
  } else if (status === "lost") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("progress");
  return (
    <>
      <Banner status={status} guessCount={guesses.length} />
      <GuessResults guesses={guesses} />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        status={status}
        setStatus={setStatus}
      />
    </>
  );
}

export default Game;
