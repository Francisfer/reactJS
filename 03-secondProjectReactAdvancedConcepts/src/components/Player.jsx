import { useState } from "react";

// This component is about the repetition concept.

// Whenever we have code that is repeated with slighter changes we also should create a component.

// Remember that, in the beginning, when we created this component for both players and "call" it, the click of the button in one of the players changed the state for that player only.

// Although we have the same component being returned and the same button click being handled, the INSTANCES OF A COMPONENT WORK IN ISOLATION.

// So when we "call" a component from the app more than one time, we are creating different instances of that component and they are not connected.

// REMEMBER THAT TO TOGGLE THE STATE WITH THE PREVIOUS STATE WE MUST WRITE A CALLBACK SO THAT REACT TRACKS THE STATE CORRECTLY.

// To save and output the player name, we create a new state.

// To save the name that is being written by the user, we listen for the change event on the input element.

// For that we don't have to attach a listener, we just use the hook on change that calls the callback onChange.

// On change will trigger the callback at each keystroke and provides an event object that contains the value inserted by the user.

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((prevState) => !prevState);
  }

  function handleChange(eventObj) {
    // Remember that this works with the value prop instead of the defaultValue because we are setting it at the same time that we are changing it.
    // TWO WAY BINDING
    setPlayerName(eventObj.target.value);
    console.log(eventObj.target.value);
  }

  let playerElement = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerElement = (
      <input
        type="text"
        required
        // defaultValue={playerName}; remember that works like this because we are setting the value in real time with state.
        // TWO WAY BINDING
        value={playerName}
        // onChange={(eventObj) => handleChange(eventObj)} - is passed automatically, just to remember
        onChange={handleChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
