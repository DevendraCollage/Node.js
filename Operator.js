//* Define our own module and export from this file to use in another file.

//! You can export any type of function.
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multi = (a, b) => {
  return a * b;
};

//! You can also export variables.
let name = "devendra";

module.exports = { add, sub, multi, name };
