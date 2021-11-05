const fs = require('fs'); 
const colors = require('colors'); 

class _init{
    constructor(data = {}){
        try {
            this.setup(data)
        } catch (error) {
            return
        }       
    }
    setup(data){
        this.log = (args) => {
            let file = args; 
            if(!args) return file = "./error.err"; 
            fs.readFile(__dirname + `${file}`, 'utf-8', function(error, data){ 
                if(file === "./error.err") return console.log(data); 
                if(args){ 
                    const dataStr = "<" + "data" + ">"; 
                    const read = data.split(`data: ${dataStr}>> : `).join(''); 
                    const readComplete = read.split("string: ").join(""); 
                    if (data.includes(dataStr)); 
                        if(!data.includes(dataStr + ">>")) return console.log("Error DataStr: The data string must have \">>\".".red); 
                        if(!read.includes("string")) return console.log("Error String: The data must have \"string:\" to start a database".red); 
                        console.log(readComplete)
                }
            })
        }
    }
}; 
module.exports._init = _init