function run(args){ 
    // const fs = require('fs'); 
    // const colors = require('colors'); 
    // fs.readFile(`${e}`, 'utf-8', function(error, data){ 
    //     if(e === "./error.err") return console.log(data); 
    //     if(e){  
    //         const dataStr = "<" + "data" + ">"; 
    //         const read = data.split(`data: ${dataStr}>> : `).join(''); 
    //         const readComplete = read.split("string: ").join(""); 
    //         if (data.includes(dataStr))
    //             if(!data.includes(dataStr + ">>")) return console.log("Error DataStr: The data string must have \">>\".".red); 
    //             if(!read.includes("string")) return console.log("Error String: The data must have \"string:\" to start a database".red); 
    //             console.log(readComplete); 
    //             return 
    //     }
    // })
    console.log(`Hello, ${args}`)
};
module.exports.run = run