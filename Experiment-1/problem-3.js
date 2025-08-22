const http = require('http');
const fs = require('fs');
const PORT = 8000;
const filePath = './test.txt';

const server = http.createServer((req, res) => {
    if (req.url === '/read-file') {
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end('File not found or error reading file.');
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(data);
        });
    } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server is running. Use /read-file to read the text file.');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
