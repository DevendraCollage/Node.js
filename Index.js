//* Import from the other file and require object destructuring to use Functions, and Variables.
const { add, sub, multi, name } = require("./Operator"); //? Object destructuring

//! Print the function details.
console.log(add(5, 2));
console.log(sub(5, 2));
console.log(multi(5, 2));
console.log(name);
