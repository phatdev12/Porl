function run(){ 
    const args = process.argv
    const fs = require('fs'); 
    const colors = require('colors'); 
    fs.readFile(`${args}`, 'utf-8', function(error, data){ 
        if(args){  
            const dataStr = "<" + "data" + ">"; 
            const read = data.split(`data: ${dataStr}>> : `).join(''); 
            const readComplete = read.split("string: ").join(""); 
            if (data.includes(dataStr))
                if(!data.includes(dataStr + ">>")) return console.log("Error DataStr: The data string must have \">>\".".red); 
                if(!read.includes("string")) return console.log("Error String: The data must have \"string:\" to start a database".red); 
                console.log(readComplete); 
                return 
        }
    })
};
if(typeof require !== 'undefined' && require.main === module){
    run()
}