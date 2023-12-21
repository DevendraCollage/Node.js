//! Import Module for performing file system
const fs = require("fs");

//todo: We pass them a function as an argument - a callback that gets called when that task completes. The callback has an argument hat tells you whether the operation completed successfully. Now we need to say what to do when fs.writeFile has completed (even is it's nothing), and start checking for errors.

//? Write to the file with Asynchronous way
fs.writeFile(
  "demo.txt",
  "This is the my first file with Asynchronous Method of creating a file!",
  (error) => {
    console.log(`File is Created!`);
  }
); //? With this method you need to define callback function

//? Text Add to the file with Asynchronous way
fs.appendFile("demo.txt", ", Hello World", (error) => {
  console.log("Data Added To The File!");
}); //? With this method you need to define callback function

//? Read from the file with Asynchronous way
fs.readFile("demo.txt", "utf-8", (error, data) => {
  console.log(data);
}); //? With this method you need to define callback function and pass the two parameter
