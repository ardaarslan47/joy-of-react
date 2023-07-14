import React from "react";
import { range } from "../../utils";
import { answer } from "../Game/Game";
import { checkGuess } from "../../game-helpers";

function Guess({ children }) {
  const handleAnswer = () => {
    if (!children) {
      return "undefined";
    }
    return checkGuess(children, answer);
  };
  return (
    <p className="guess">
      {range(0, 5).map((e) => {
        return (
          <span
            className={
              handleAnswer()[e].letter
                ? `cell ${handleAnswer()[e].status}`
                : "cell"
            }
            key={e}
          >
            {handleAnswer()[e].letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
