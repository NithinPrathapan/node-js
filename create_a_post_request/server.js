const http = require("http");
const fs = require("fs");
const path = require("path");

// !define path
const homePage = path.join(__dirname, "index.html");
const listPage = path.join(__dirname, "list.html");

http
  .createServer((req, res) => {
    console.log(req.url, "url");
    console.log(req.method, "method");
    if (req.method === "GET" && req.url === "/") {
      fs.readFile(homePage, "utf-8", (err, data) => {
        if (err) {
          res.end("internal sever error");
        }
        res.end(data);
      });
    } else if (req.method === "GET" && req.url === "/submit") {
      fs.readFile(homePage, "utf-8", (err, data) => {
        if (err) {
          res.end("internal sever error");
        }
        res.end(data);
      });
    } else if (req.method === "POST" && req.url === "/submit") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        console.log("recieved post data", body);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Form submitted successfully! Data received: " + body);
      });
    } else {
      res.end("internal sever error");
    }
  })
  .listen(3000, () => {
    console.log("listening on http://localhost:3000");
  });
