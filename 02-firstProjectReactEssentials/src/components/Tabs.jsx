export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
  // When passing an element as a string (built in component), we can't just use the value that we receive in the prop because it will look for a built in component (tag) with that name, which does not exist of course.

  // For this to work, we need to store the prop as a custom component (capital letter), so it can be used as a custom component, but its value is a build in component.

  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
