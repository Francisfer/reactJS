import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

// To wrap content without a div (without an extra element rendered on the page).

// The new syntax does not require the Fragment import, whenever we want the same result we can just <> </>
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header /> {/* This is how we "call" our components */}
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
