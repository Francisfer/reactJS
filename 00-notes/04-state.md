# The state concept is all about registering "variables".

-> These variables are handled by react and are updated with the help of a function that is provided by react.

-> This function will tell react that data/state has changed and, for that the ui will be updated.

-> This function is called useState and must be imported from react.

-> This is one of the so called react hooks. All the functions that start with use are the hooks.

-> These functions must only be called inside of react component functions or inside of other react hooks.

-> We start by using it in the App component function. It must be called on the top level of the component function.

-> When we useState and call it with an initial value, the returned value is an array with two elements.

-> The first element on the array will be the current data snapshot for the component execution cycle. So, no matter which component you use state.

-> The second element in the array will always be a function. It is used to update the state value and tell react to re execute the component function in which use state was called.
