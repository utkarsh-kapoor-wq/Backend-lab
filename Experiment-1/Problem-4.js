const fs = require("fs");
const filePath = "./data.txt";

// Using fs.stat
fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error("Error: data.txt does not exist.");
    return;
  }
  if (!stats.isFile()) {
    console.error("Error: data.txt is not a file.");
    return;
  }
  const readStream = fs.createReadStream(filePath, { encoding: "utf8" });
  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
  readStream.on("error", (error) => {
    console.error("Error reading file:", error.message);
  });
  readStream.on("end", () => {
    console.log("\n--- End of file ---");
  });
});

// using promise
async () => {
  try {
    await fs.promises.access(filePath);
    const readStream = fs.createReadStream(filePath, { encoding: "utf8" });
    readStream.on("data", (chunk) => {
      process.stdout.write(chunk);
    });
    readStream.on("end", () => {
      console.log("\n--- End of file (async/await) ---");
    });
    readStream.on("error", (error) => {
      console.error("Error reading file (async/await):", error.message);
    });
  } catch (err) {
    console.error("Error: data.txt does not exist. (async/await)");
  }
};
// Errors faced :
// 1. File not found or wrong path causes access/stat errors.
// 2. Not handling stream errors can crash the process.
// 3. Forgetting to check if the path is a file (not a directory).
// 4. Async function not called/executed (missing invocation).
