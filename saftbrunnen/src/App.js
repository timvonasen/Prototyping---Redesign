import "./App.css";
import React, { useState } from "react";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import ScoreBoard from "./Components/ScoreBoard";
import { QuizContext } from "./Helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      {/* Will be displayed above every GameState */}
      <header className="Header">
        <h1>MARVEL</h1>
      </header>
      <div className="SmallHeader">
        <h3>Characters Quiz</h3>
      </div>

      <QuizContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "scoreBoard" && <ScoreBoard />}
      </QuizContext.Provider>
      <footer className="Footer">
        <h3>
          <a href="https://github.com/timvonasen">© 2023 Tim von Asen</a>
        </h3>
      </footer>
    </div>
  );
}

export default App;
