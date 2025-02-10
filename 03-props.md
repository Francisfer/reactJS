# Props are used when we want to reuse a component with different data.

## Using attributes:

--> The props concept is all about being able to pass data into components.

--> When react calls a function component with props, it will pass them to the the component function.

--> That is why we can use the same function for the same components but with different data, because the data is defined on the props of each component.

--> It is an object.

## Using the children prop:

--> Even if we don't pass props or attributes, react still passes the default children prop when it calls the function or component.

--> We don't set the children prop with attributes, it is automatically passed by react.

--> This children prop refers to the text between the component tags.

--> It could be just some text in the case of a button or a more complex structure like an h2 inside of a div.

--> It all comes to the use case. In the core concept component it made sense to receive multiple attributes
that configured the different parts of the card.

--> For the button, since we just need the text, it is easier to just pass the text, using the props.children.

-> Like this it is more convenient and recognizable because it looks like writing a button in html. We could, of course, add a property like label and pass it as a prop. (personal preference).
