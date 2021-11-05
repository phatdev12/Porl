const fs = require('fs');

fs.readFile('./main.porl', 'utf-8', function(error, data){
    data.split("data: <data>>>")
})