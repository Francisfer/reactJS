import Player from "./components/Player.jsx";

function App() {
  return (
    <main id="game-container">
      <ol id="players">
        <Player playerName="Player 1" playerSymbol="O" />
        <Player playerName="Player 2" playerSymbol="X" />
      </ol>
    </main>
  );
}

export default App;
