const http = require('http')

// console.log('hello world')
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end('Hello world!')
})

server.listen(8080)