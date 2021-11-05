const fs = require('fs');

fs.readFile('./main.porl', 'utf-8', function(error, data, a){
    const read = data.split(`${data[1]}: <data>>> : `)
    console.log(read[1])
    console.log(data[0] + ":")
})