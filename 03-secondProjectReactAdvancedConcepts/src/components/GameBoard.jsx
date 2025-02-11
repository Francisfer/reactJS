// To make the grid.
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard() {
  // The index as key is not a good practice because it is related with the position of the data.
  // Here it does't matter but keep it in mind.
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button></button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
