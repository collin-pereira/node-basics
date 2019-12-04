const fs = require('fs')

const data = fs.readFileSync('demoFile.txt')
console.log('data: '+data)