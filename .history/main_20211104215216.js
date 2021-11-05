const fs = require('fs');

fs.readFile('./main.porl', 'utf-8', function(error, data){
    const read = data.split(`${data[1]}: <data>>> : `)
    const lower =  data.toLowerCase(":")
    console.log(read[1])
    console.log(lower)
})