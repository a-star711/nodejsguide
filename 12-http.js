const http = require('http');

const server = http.createServer((req,res) => {
  if(req.url === '/'){
   res.end('welcome to our home page')
   return
  }
  else if(req.url === '/about'){
     res.end('our short history')
     return
  }
  else {
    res.end(`
      <h1>OOps!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">back Home</a>
      `)
    return

  }

})


server.listen(5000)