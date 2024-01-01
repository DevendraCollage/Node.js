//* Events Module
//* Node.js has a built-in module called "Events".
//* Where you can create-, fire-, and listen for- your own events.

const EventEmitter = require("events"); //? This is the class.

//* Example-1 Registering for the event to be fired only one time using once.

// const event = new EventEmitter(); //? This is the object of the EventEmitter Class.

// event.on("sayMyName", () => {
//   console.log("your name is Devendra!");
// });

// event.emit("sayMyName");

//* Example-2 Create an even emitter instance and register a couple of callbacks.

const event = new EventEmitter(); //? This is the object of the EventEmitter Class.

event.on("sayMyName", () => {
  console.log("your name is Devendra!");
});

event.on("sayMyName", () => {
  console.log("you are from India.");
});

event.on("sayMyName", () => {
  console.log("you are 22 year old!");
});

event.emit("sayMyName");

//* Example-3 Registering for the event with callback parameters.

event.on("askQuestion", (question, answer) => {
  console.log(`What's ${question} ?`);
  console.log(`The answer is ${answer}`);
});

event.emit("askQuestion", "Python is", "Python is a Programming Language.");
