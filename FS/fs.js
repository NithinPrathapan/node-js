const fs = require("fs");
const path = require("path");

const filePath = p`ath.join(__dirname, "example.html");

fs.writeFile(filePath, "hello world", "utf-8", (err) => {
  if (err) console.log(err);
  console.log("write file sucessfully");
});

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log("read file sucessfully", data);
});

fs.appendFile(filePath, "this is append line", "utf-8", (err) => {
  if (err) {
    console.log("error");
  }
  console.log("data appended aynchronously");

  fs.readFile(filePath, 'utf8', (err, updatedData) => {
    if (err) {
      console.error('Error reading updated file:', err);
    } else {
      console.log('Updated file contents (asynchronous):');
      console.log(updatedData);
    }
  });
});

// output -> asynchrnously printed
//! write file sucessfully
//? data appended aynchronously
//! read file sucessfully hello world


// how to make it synchronous /??


// =================================================================



// 5. Writing to a file (Synchronous)
try {
    fs.writeFileSync(filePath, 'This is a synchronous write operation.');
    
    console.log('File written synchronously.');
    
    // 6. Reading from the file (Synchronous)
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('File contents (synchronous):');
    console.log(data);
  
    // 7. Appending data to the file (Synchronous)
    fs.appendFileSync(filePath, 'Synchronous append operation.\n');
    console.log('Data appended to file synchronously.');
  
    // 8. Reading the updated file (Synchronous)
    const updatedDataSync = fs.readFileSync(filePath, 'utf8');
    console.log('Updated file contents (synchronous):');
    console.log(updatedDataSync);
  } catch (err) {
    console.error('Error during synchronous file operation:', err);
  }