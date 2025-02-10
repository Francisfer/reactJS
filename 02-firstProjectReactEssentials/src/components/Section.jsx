export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

/* REMEMBER THAT, IF WE ARE USING A CUSTOM COMPONENT, THE ID, CLASSES AND OTHER ATTRIBUTES ARE NOW PROPS */

/* WE COULD USE DESTRUCTURING TO GET ACCESS TO THEM, BUT IF WE HAVE A BUNCH THAT IS NOT IDEAL. */

// That is where proxy props come into place. Which is basically using the rest syntax to collect the remaining props into an object.

// And then use the spread operator to spread the attributes (props) on the built in component.

// So, we destructure the props that we need to build the component and leave the id, classes, attributes for the rest syntax.

// export default function Section({ title, id, children }) {
//   return (
//     <section id={id}>
//       <h2>{title}</h2>
//       {children}
//     </section>
//   );
// }
