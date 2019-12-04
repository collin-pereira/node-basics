const fs = require('fs')

fs.readFile('demoFile.txt',(err, data)=>{
    if(err){
        return console.log(err)
    }
    console.log('data: '+ data)
})
