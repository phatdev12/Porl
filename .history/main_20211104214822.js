const fs = require('fs');

fs.readFile('./main.porl', 'utf-8', function(error, data, a){
    const read = data.split(`${a}: <data>>> : `)
    console.log(read[1])
})