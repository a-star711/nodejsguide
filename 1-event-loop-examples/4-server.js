const http = require('http')

// every time a request is made this executes
const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello world')
})

server.listen(5000, () => {
  console.log('Server listening on port: 5000...')
}) 