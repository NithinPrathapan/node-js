const http = require("http");

http
  .createServer((req, res) => {
    res.end("hello this is from the server");
  })
  .listen(3000, () => {
    console.log("listing on port 3000");
  });


