
const fs = require('fs');
const filePath = './output.txt';
const message = 'Hello, this file is created through Node.js !';

const writeStream = fs.createWriteStream(filePath, { encoding: 'utf8', flags: 'w' });
writeStream.write(message);
writeStream.end();

writeStream.on('finish', () => {
	console.log('Success: Data written to output.txt');
});

writeStream.on('error', (err) => {
	console.error('Error writing to file:', err.message);
});
