//* The http.createServer() method includes request and response parameters which is supplies by Node.js.

//* The request object can be used to get information about the current HTTP request
//* E.g., url, request header, and data.

//* The response object can be used to send a response for a current HTTP request.

//* If the response from the HTTP server is supposed to be displayed as HTML.
//* You should include an HTTP header with the correct content type:

//! Import Module for create your own server
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello From The Other Side of the server!");
  } else if (req.url == "/about") {
    res.end("Hello From The About of the server!");
  } else {
    res.end("404 Not Found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("The Server Is Running On Port 8000.");
});
