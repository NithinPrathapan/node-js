const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "content-Type": "text/html" });
    res.end("<h1>Welcome to the Server-Side JavaScript World!</h1>");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("server listening on port http://localhost:3000");
});
