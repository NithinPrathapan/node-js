const fs = require("fs");

fs.readFile("demo.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

console.log('hello world!');