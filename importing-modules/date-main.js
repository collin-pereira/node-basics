const http = require('http')
const date = require('./date-module')

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text.html'})
    res.write('The date and time are currently : '+date)
    res.end()
}).listen(8000)