const fs = require('fs');
const colors = require('colors');

const [,, ...args] = process.argv

let file = args
if(!args) return file = "./error.err"

fs.readFile(`${file}`, 'utf-8', function(error, data){
    if(file === "./error.err") return console.log(data)
    const sum = args[0] + ":"
    if(args){
        const lower =  data.toLowerCase(":").split(":").join('')
        const dataStr = "<" + "data" + ">"
        const read = data.split(`${args[0]}: ${dataStr}>> : `).join('')
        if (data.includes(dataStr))
            if(!data.includes(dataStr + ">>")) return console.log("Error DataStr: The data string must have \">>\".".red)
            console.log(read)
            return
    }  
})
