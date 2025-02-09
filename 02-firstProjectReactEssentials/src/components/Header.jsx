// Import the image instead of hardcoding the src attribute. It is done so that the path does not get lost in the build process and also because we can optimize images.
import headerImg from "../assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

// Functionality to render a different word on the p element
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Parenthesis on the return value because it is multi-line.
export default function Header() {
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
