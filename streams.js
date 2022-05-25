const fs = require('fs');


// READ STREAMS FROM BLOG3 IN CHUNKS AND WRITE THEN IN BLOG4 IN THE DOCS DIRECTORY

//FIRST STEP: Initialize the Read and Write Stream

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//SECOND STEP: Write the function

// readStream.on('data', (chunk) => {
//     console.log('\n\n---NEW CHUNK---\n\n')
//     console.log(chunk);
//     writeStream.write('\n\nNEW CHUNK\n\n');
//     writeStream.write(chunk);
// })

//PIPING
//Pipping is a shorter way of writing to a stream wht is being read from another stream.
readStream.pipe(writeStream);

