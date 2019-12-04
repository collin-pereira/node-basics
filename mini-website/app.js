const http = require('http')
const url = require('url')
const fs = require('fs')


http.createServer((req, res)=>{
    let q = url.parse(req.url, true)
    let filename = '.'+q.pathname
    let page = filename 
    let flag = 0
    if(filename === './files/'){
        page = undefined
        fs.readdir('.',(err, files)=>{
            if(err){
                console.log(err)
            }
            else{
                res.writeHead(200, {'Content-Type':'Text/html'})
                files.forEach((file)=>{      
                    res.write('<a href="/'+file+'/">'+file+'</a>')
                    res.write('<br>')                            
                })

                res.end()
            }
        })
    }
    if(filename ==='./' || filename === './index.html/'){
        page = './index.html'
    }

    if(page) {
    fs.readFile(page,(err, data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'Text/html'})
            return res.end('404 Not Found')
        }
        res.writeHead(200, {'Content-Type':'Text/html'})
        res.write(data)
        res.end()
    })}
    
}).listen(8080)