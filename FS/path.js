const path = require('path');

// 1. Using path.join() - Joins multiple path segments
const filePath = path.join('folder', 'subfolder', 'file.txt');
console.log('Joined Path:', filePath);

// 2. Using path.resolve() - Resolves to an absolute path
const absolutePath = path.resolve('folder', 'subfolder', 'file.txt');
console.log('Absolute Path:', absolutePath);

// 3. Using path.basename() - Gets the file name
const fileName = path.basename(filePath);
console.log('File Name:', fileName);

// 4. Using path.dirname() - Gets the directory name
const directoryName = path.dirname(filePath);
console.log('Directory Name:', directoryName);

// 5. Using path.extname() - Gets the file extension
const fileExtension = path.extname(filePath);
console.log('File Extension:', fileExtension);

// 6. Using path.isAbsolute() - Checks if a path is absolute
console.log('Is Absolute Path (for filePath):', path.isAbsolute(filePath));
console.log('Is Absolute Path (for absolutePath):', path.isAbsolute(absolutePath));

// 7. Using path.normalize() - Normalizes a path
const normalizedPath = path.normalize('folder/./subfolder/../file.txt');
console.log('Normalized Path:', normalizedPath);

// 8. Using path.parse() - Parses a path into components
const parsedPath = path.parse(filePath);
console.log('Parsed Path:', parsedPath);
