import { useState } from "react";

// To make the grid.
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// The index as key is not a good practice because it is related with the position of the data.
// Here it does't matter but keep it in mind.
// Each nested array is a row, in the first map, for each row, we want a list item with a key so that it can be identified in a unique way. So we are mapping through the outer arrays (3).

// Inside of each list item (row), we want another ordered list where we want to output the value inside of the inner arrays.

// For that, we need to loop over each row, which has three values (null at start). This will give us the rows.

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  // Initial state set to initialGameBoard
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // Function too update the state on button click. We replace the game board with the new state of game board.

  // Here, one field will change from null to either X or O, depending on which player clicked the button. For this, the handler needs to receive arguments.

  // We need to know which row index has the button that was clicked and which column of that row it is in. That is why we need to work based on indexes. They act as coords.

  // Since we don't want to lose the previous selected fields, the objective is to update the state based on the previous state of the gameBoard.

  // When we are dealing with reference values as state, like objects or arrays, we should not mutate them directly. We should use a deep copy and work with that copy.

  // We are not using a deep copy, we use spread inside of an array the first time so that a new reference is created for the main array, and then loop over the rows to create new references for the nested arrays.

  // Like this, we update the state through a deep copy, in an immutable way.

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

      // returning the updated previous state to the new state.
      return updatedBoard;
    });
    // Here to call it on click
    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
