export default function TabButton(props) {
  return (
    <li>
      {/* we receive the function as value through the props. we are forwarding the function that is declared on app because we need the data from there. */}
      <button onClick={props.onClick}>{props.children}</button>
    </li>
  );
}
