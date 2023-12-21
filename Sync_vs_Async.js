//todo: Differentiate Synchronous v/s Asynchronous Way.

//! Import Module for performing file system
const fs = require("fs");

//* 1. Synchronous Way - This is slow way and lose of data
const readFile = fs.readFileSync("data.txt", "utf-8");
console.log(readFile); //? This will print this data first and wait for print
console.log("Hello, World"); //? after that this will be printed

//* 2. Asynchronous Way - This is the fastest way and lose of data
const ReadFile = fs.readFile("demo.txt", "utf-8", (error, Data) => {
  console.log(Data);
}); //? After that this will printed
console.log("Hello, World"); //? This will print this data
