
const fs = require('fs');
const inputFile = './input.txt';
const outputFile = './output1.txt';

const readStream = fs.createReadStream(inputFile, { encoding: 'utf8' });
const writeStream = fs.createWriteStream(outputFile, { encoding: 'utf8' });

readStream.pipe(writeStream);

writeStream.on('finish', () => {
	console.log('Success: Data piped from input.txt to output.txt');
});

readStream.on('error', (err) => {
	console.error('Error reading input.txt:', err.message);
});
writeStream.on('error', (err) => {
	console.error('Error writing to output.txt:', err.message);
});
