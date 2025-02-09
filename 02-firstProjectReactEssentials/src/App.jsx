// Import the image instead of hardcoding the src attribute. It is done so that the path does not get lost in the build process and also because we can optimize images.
import headerImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

// Functionality to render a different word on the p element
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Parenthesis on the return value because it is multi-line.
function Header() {
  // Code to generate the description - here to make the jsx lean.
  const description =
    reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      <img src={headerImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// We can use destructuring to pull the property names from the props object
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }
function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
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
      </main>
    </div>
  );
}

export default App;
