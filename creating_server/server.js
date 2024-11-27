const http = require("http");

http
  .createServer((req, res) => {
    res.end("<h1>hello server</h1>");
  })
  .listen(3000, () => {
    console.log("listening on http://localhost:3000");
  });
