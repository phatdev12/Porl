const fs = require('fs');

fs.readFile('./main.porl', 'utf-8', function(error, data){
    const read = data.split(`${data[1]}: <data>>> : `)
    data.toLowerCase(":")
    console.log(read[1])
    console.log(data[0])
})