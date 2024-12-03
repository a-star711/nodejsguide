// Streams

// Writable 
// Readable
// Duplex (both write and read)
// Transform
// Streams when reading file

const { createReadStream } = require('fs')
// Reading data in CHUNKS
// Chunks & Remainder
// https://nodejs.org/api/fs.html#filehandlecreatereadstreamoptions

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding:'utf8'})
// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' })
// you can also write data in chunks stream.pipe()

stream.on('data', (result) => {
console.log(result)
})


stream.on('error', (err) => {
  console.log(err)
})
