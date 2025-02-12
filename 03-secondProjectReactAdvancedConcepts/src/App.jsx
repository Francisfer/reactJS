import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import React, { useState } from "react";
// Lifting state up - we useState here to manage the active player because we need that information on both components, on GameBoard for the symbol to be displayed and on Player to add the classes for styling.
function App() {
  // Lifting state.

  const [activePlayer, setActivePlayer] = useState("X");

  // Function to be executed when we want to switch turns. It is when the user selects a square that we want to change turns.

  // Selecting squares is handled in the gameBoard component, but this time we do it differently because we want this function to run here.

  // For this we pass it to GameBoard as a prop, so that when we call it in the component, it is actually this handleSelectSquare that will be executed.

  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) => {
      return currActivePlayer === "X" ? "O" : "X";
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
