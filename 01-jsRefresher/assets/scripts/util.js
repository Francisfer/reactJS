// Named export - as many as we want.
export let apiKey = "My api key";

// Default exports - We just export the value, that is the reason why we must only have one default export per module.

export default function (a, b) {
  return a + b;
}
