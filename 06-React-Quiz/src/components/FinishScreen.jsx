import React from "react";
import { useQuiz } from "../../contexts/QuizContext";

export default function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  else if ((percentage < 100) & (percentage >= 80)) emoji = "🥈";
  else if ((percentage < 80) & (percentage >= 60)) emoji = "🥉";
  else if ((percentage < 80) & (percentage >= 40)) emoji = "👍🏻";
  else emoji = "👎🏻";

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart The Quiz
      </button>
    </>
  );
}
