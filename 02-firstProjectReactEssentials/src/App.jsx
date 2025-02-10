import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  // Using state so that we can render different data upon the click of the tab buttons.

  const [selectedTopic, setSelectedTopic] = useState();

  /* We have the function here, pass it as a value on our tab components through a prop, and the event is handled in the component itself */
  function handleClick(clickedButton) {
    // always logs the previous state
    // console.log(selectedTopic);

    // Using state - changing the tabContent on click
    setSelectedTopic(clickedButton);
  }

  // Variable that stores the jsx to be rendered conditionally - not state. jsx can be used as a value.
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header /> {/* This is how we "call" our components */}
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* passing a pointer, a function as a value */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={function () {
                // Instead of passing the function as a value directly, we return the value which results from calling the function with an argument. That is how we can pass a custom parameter in the handleClick function.
                return handleClick("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>

          {/* Rendering conditionally with ternary */}
          {/* {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

          {/* Rendering conditionally with short circuiting */}
          {/* {!selectedTopic && <p>Please select a topic.</p>}

          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

          {/* Rendering conditionally with a variable */}

          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
