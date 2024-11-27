const http = require("http");
const fs = require("fs");
const path = require("path");
http
  .createServer((req, res) => {
    const homePage = path.join(__dirname, "index.html");
    if (req.url == "/") {
      fs.readFile(homePage, "utf8", (err, data) => {
        if (err) {
          console.log("an error occured");
          req.end("internal error");
          return;
        }
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data); 
      });
    }
  })
  .listen(3000, () => {
    console.log("listing on server");
  });
