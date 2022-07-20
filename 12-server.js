const http = require("http");

// Req - Out -> In
// Res - Sending back
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end("<h1>Oops!</h1>");
});

server.listen(5000);

//what is end
