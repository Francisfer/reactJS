import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  /* We have the function here, pass it as a value on our tab components through a prop, and the event is handled in the component itself */
  function handleClick() {
    console.log("click handled");
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
            <TabButton onClick={handleClick}>Components</TabButton>
            <TabButton onClick={handleClick}>JSX</TabButton>
            <TabButton onClick={handleClick}>Props</TabButton>
            <TabButton onClick={handleClick}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
