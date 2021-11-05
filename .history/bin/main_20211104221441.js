const fs = require('fs');

fs.readFile('./main.porl', 'utf-8', function(error, data){
    const lower =  data.toLowerCase(":").split(":").join('')
    const dataStr = "<" + "data" + ">"
    if (data.includes(dataStr))
        if(!data.includes(dataStr + ">>")) return console.log("Error DataStr: The data string must have \">>\".")
        console.log(data)
        return
})