export default function TabButton(props) {
  return (
    <li>
      {/* we receive the function as value through the props. we are forwarding the function to here, from App because we need the data from there. */}
      <button
        className={props.isSelected ? "active" : undefined}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </li>
  );
}
