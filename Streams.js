//todo: Streams are objects that let you read data from a source or write data to a destination in continuous fashion. in Node.js, there are four types of streams.

//todo: Streaming means listening to music or watching video in 'real time. Instead of downloading a file to your computer and watching it later

//* Readable - Stream which is used for read operation
//* Writable - Stream which is used for write operation
//* Duplex - Stream which can be used for both read and write operation
//* Transform - A type of duplex stream where the output is computed based on input

const fs = require("fs");
const http = require("http");

const server = require("http").createServer();

server.on("request", (req, res) => {
  //? This is the normal way to show the data
  fs.readFile("input.txt", (err, data) => {
    if (err) return console.error(err);
    res.end(data.toString());
  });

  //? This is the second way to show the data using stream
  //* Reading from a stream
  //* Create a readable stream
  //* Handle stream events -> data, end, and error
  // const rstream = fs.createReadStream("input.txt");
  rstream.on("data", (chunk) => {
    console.log(`Received ${chunk.length} bytes`);
    res.write(chunk);
  });
  rstream.on("end", () => {
    res.end();
  });

  //? This is the third way to show the data using pipe method
  //* Pipe method - readable data to print writeable data on the screen
  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
});

//? Add logic to start the server, such as:
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
