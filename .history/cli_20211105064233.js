const fs = require('fs');

const [,, ...args] = process.argv

fs.readFile(`${args}`, 'utf-8', function(error, data){
    const read = data.split(`${data[1]}: <data>>> : `)
    const lower =  data.toLowerCase(":").split(":").join('')
    const dataStr = "<" + "data" + ">"
    if (data.includes(dataStr))
        if(!data.includes(dataStr + ">>")) return console.log("Error DataStr: The data string must have \">>\".")
        console.log(read[1])
        return
})
