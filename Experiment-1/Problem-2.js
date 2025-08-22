
// Using fs.readFile
const fs = require("fs");
const filePath = './test.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err.message);
        return;
    }
    console.log('File contents:', data);
});

// Solution 2: Using fs.promises.readFile (Promise/async-await)
const fsPromises = require("fs").promises;
async function readFileAsync() {
    try {
        const data = await fsPromises.readFile(filePath, 'utf8');
        console.log('File contents (async/await):', data);
    } catch (err) {
        console.log("Error reading file (async/await):", err.message);
    }
}
readFileAsync();


