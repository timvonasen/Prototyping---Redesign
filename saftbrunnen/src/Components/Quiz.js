import React, { useState } from "react";
import "../App.css";

export default function App() {
  const questions = [
    /* Question 1 */
    {
      questionText: "Who was the first Avenger?",
      answerOptions: [
        { answerText: "Steve Rogers", isCorrect: true },
        { answerText: "Thor Odinson", isCorrect: false },
        { answerText: "Nicholas Fury", isCorrect: false },
        { answerText: "Carol Danvers", isCorrect: false },
      ],
    },
    /* Question 2 */
    {
      questionText: "Who is the most Powerful Woman?",
      answerOptions: [
        { answerText: "Scarlet Witch ", isCorrect: false },
        { answerText: "Natasha Romanoff", isCorrect: false },
        { answerText: "Jean Grey", isCorrect: true },
        { answerText: "Carol Danvers", isCorrect: false },
      ],
    },
    /* Question 3 */
    {
      questionText: "What is Iron Man without his suit?",
      answerOptions: [
        { answerText: "A Genius", isCorrect: true },
        { answerText: "Billionaire", isCorrect: true },
        { answerText: "Tony Stark", isCorrect: true },
        { answerText: "Philanthropist.", isCorrect: true },
      ],
    },
    /* Question 4 */
    {
      questionText: "Who is the oldest Avenger?",
      answerOptions: [
        { answerText: "Carol Danvers", isCorrect: false },
        { answerText: "Steve Rogers", isCorrect: false },
        { answerText: "Nicholas Fury", isCorrect: false },
        { answerText: "Thor Odinson", isCorrect: true },
      ],
    },

    /* Question 5 */
    {
      questionText:
        "What is the name of the mutant antagonist of 'The Incredible Hulk'?",
      answerOptions: [
        { answerText: "Red Hulk", isCorrect: false },
        { answerText: "Abomination", isCorrect: true },
        { answerText: "The Thing", isCorrect: false },
        { answerText: "Thor Odinson", isCorrect: false },
      ],
    },

    /* Question 6 */
    {
      questionText:
        "In which US state do Thor and his hammer Mjölnir get stranded?",
      answerOptions: [
        { answerText: "Hawaii", isCorrect: false },
        { answerText: "Nebraska", isCorrect: false },
        { answerText: "New York", isCorrect: false },
        { answerText: "New Mexico", isCorrect: true },
      ],
    },

    /* Question 7 */
    {
      questionText:
        "In what place did Clint and Natasha's mission take place that they always remember differently?",
      answerOptions: [
        { answerText: "Berlin, Germany", isCorrect: false },
        { answerText: "Budapest, Hungary", isCorrect: true },
        { answerText: "Helsinki, Finland", isCorrect: false },
        { answerText: "Wien, Austria", isCorrect: false },
      ],
    },

    /* Question 8 */
    {
      questionText:
        "What nickname does the Hulkbuster get in Avengers 2: Age of Ultron?",
      answerOptions: [
        { answerText: "Bannersmasher", isCorrect: false },
        { answerText: "Science Brother", isCorrect: false },
        { answerText: "Veronica", isCorrect: true },
        { answerText: "Mechanic Hulk", isCorrect: false },
      ],
    },

    /* Question 9 */
    {
      questionText:
        "At which airport do the Avengers battle in 'The First Avenger: Civil War'?",
      answerOptions: [
        { answerText: "Berlin, Germany", isCorrect: true },
        { answerText: "Astana, Kazakhstan", isCorrect: false },
        { answerText: "Budapest, Hungary", isCorrect: false },
        { answerText: "Paris France", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="Quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
