// Using fs.readFile
const fs = require("fs");
const filePath = "./test.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err.message);
    return;
  }
  console.log("File contents:", data);
});

// Solution 2: Using fs.promises.readFile (Promise/async-await)
const fsPromises = require("fs").promises;
async function readFileAsync() {
  try {
    const data = await fsPromises.readFile(filePath, "utf8");
    console.log("File contents (async/await):", data);
  } catch (err) {
    console.log("Error reading file (async/await):", err.message);
  }
}
readFileAsync();
// Errors faced (summary):
// 1. File not found or wrong path leads to read errors.
// 2. Forgetting to handle errors in callbacks or async/await can crash the app.
// 3. Mixing callback and promise APIs may cause confusion.
// 4. Not using 'utf8' encoding can result in unreadable output.
