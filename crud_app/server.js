const http = require("http");
const fs = require("fs");
const path = require("path");
const { json } = require("stream/consumers");

const homePath = path.join(__dirname, "index.html");
const signupPath = path.join(__dirname, "signup.html");
const cssPath = path.join(__dirname, "styles.css");

const server = http.createServer(async (req, res) => {
  console.log(req.url);
  // !render home page
  if (req.url == "/" && req.method == "GET") {
    fs.readFile(homePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("failed to read");
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
  }
  // !render css
  else if (req.url == "/style.css" && req.method == "GET") {
    fs.readFile(cssPath, "utf-8", (err, data) => {
      if (err) {
        res.end(data);
      }
      res.writeHead(200, { "content-type": "text/css" });
    });
  }
  // !render signup page
  else if (req.url == "/signup" && req.method == "GET") {
    fs.readFile(signupPath, "utf-8", (err, data) => {
      if (err) {
        res.end("error loading signup page");
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/signup" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      try {
       res.end(body)
      } catch (error) {
        console.log(error);
        res.end("Invalid signup data");
      }
    });
  }
  // !render user page
});

server.listen(5000, () => {
  console.log("listening on port 5000");
});
