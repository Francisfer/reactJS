import { useState } from "react";

// This component is about the repetition concept.

// Whenever we have code that is repeated with slighter changes we also should create a component.

export default function Player({ playerName, playerSymbol }) {
  const [isEditing, setIsEditing] = useState(false);

  let name;

  if (!isEditing) name = <span className="player-name">{playerName}</span>;
  if (isEditing) name = <input type="text" />;

  function editPlayerName() {
    setIsEditing(true);
  }
  return (
    <li>
      <span className="player">
        {name}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={editPlayerName}>Edit</button>
    </li>
  );
}
