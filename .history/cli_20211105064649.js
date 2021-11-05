const fs = require('fs');

const [,, ...args] = process.argv

let file = args
if(!args) return file = "./error.err"

fs.readFile(`${file}`, 'utf-8', function(error, data){
    if(file === "./error.err") return console.log(data)
    if(args){
        const read = data.split(`${data[1]}: <data>>> : `)
        const lower =  data.toLowerCase(":").split(":").join('')
        const dataStr = "<" + "data" + ">"
        if (data.includes(dataStr))
            if(!data.includes(dataStr + ">>")) return console.log("Error DataStr: The data string must have \">>\".")
            console.log(read[1])
            return
    }  
})
