import Player from "./components/Player.jsx";

function App() {
  return (
    <main id="game-container">
      <ol id="players">
        <Player initialName="Player 1" symbol="O" />
        <Player initialName="Player 2" symbol="X" />
      </ol>
    </main>
  );
}

export default App;
