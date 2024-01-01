//* JSON Stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page.

//! Import Module for performing file system
const fs = require("fs");

const bioData = {
  name: "Devendra",
  age: 22,
  gender: "Male",
  nationality: "Indian",
};

//? Convert this object into JSON
const JSONData = JSON.stringify(bioData);
console.log(JSONData);

//? Convert the JSON to object
const objData = JSON.parse(JSONData);
console.log(objData);

//* Task to perform for practice-task
//! 1. Convert the js object to JSON
const jsonData = JSON.stringify(bioData);

//! 2. Then store this JSON in the other txt file
const write_toFile = fs.writeFileSync("demo.txt", jsonData);
console.log(write_toFile);

//! 3. After Read That File
const readJSONFile = fs.readFile("demo.txt");
console.log(readJSONFile.toString());

//! 4. After that convert that JSON into the JS Object
const JSObject = JSON.parse(jsonData);
console.log(JSObject);
