import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";

function MainMenu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(QuizContext);
  return (
    <div className="Menu">
      {/* Create Text-Input Field for Username */}
      <label>Enter Your Name:</label>
      <input
        type="text"
        required
        placeholder="Ex. Tim von Asen"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Game
      </button>
    </div>
  );
}

export default MainMenu;
