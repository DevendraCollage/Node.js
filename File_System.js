//! Import Module for performing file system
const fs = require("fs");

//? Write to the file
fs.writeFileSync("demo.txt", "Hello World!"); //* If File exist then this function will add text to the file or create new file.
fs.appendFileSync("demo.txt", " This is an Node.js");

//? Read from the file
const rf = fs.readFileSync("./demo.txt");
console.log(rf.toString());

//? Rename the file
const rn = fs.renameSync("./demo.txt", "Demo.txt");
console.log(rn);
