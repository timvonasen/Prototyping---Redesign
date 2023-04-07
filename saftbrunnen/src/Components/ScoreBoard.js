import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { questions } from "../Helpers/QuestionBank";
import "../App.css";

const ScoreBoard = () => {
  const { score, setScore, setGameState, userName } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="ScoreBoard">
      <div className="score-section">
        You scored {score} out of {questions.length}
      </div>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default ScoreBoard;
