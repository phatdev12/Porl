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
        this.login = (args) => {
            let file = args.split("PORL:>>").join("")
            if(!file.includes(".porl")){
                console.log("Warning:".yellow + " File Not Found".yellow);
                console.log("The program can only read the file \"*.porl\", please try again.");
                return
            }
            if(!file) return file = "./error.err"; 
            fs.readFile("./" + file, 'utf-8', function(error, data){ 
                if(file === "./error.err") return console.log(data); 
                if(file){ 
                    const dataStr = "<" + "data" + ">"; 
                    const read = data.split(`data: ${dataStr}>> : `).join(''); 
                    const readComplete = read.split("string: ").join(""); 
                    if (data.includes(dataStr)); 
                        if(!data.includes(dataStr + ">>")) return console.log("Error DataStr: The data string must have \">>\".".red); 
                        if(!read.includes("string")) return console.log("Error String: The data must have \"string:\" to start a database".red); 
                    this.value = readComplete
                }
            })

        }
        this.log = (args) => {
            try{
                let file = args.split("PORL:>>").join("")
                if(!file.includes(".porl")){
                    console.log("Warning:".yellow + " File Not Found".yellow);
                    console.log("The program can only read the file \"*.porl\", please try again.");
                    return
                }
                else{
                    if(!file) return file = "./error.err"; 
                    fs.readFile("./" + file, 'utf-8', function(error, data){ 
                        if(file === "./error.err") return console.log(data); 
                        if(file){ 
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
            catch(err){
                console.log("ERROR: ".red + err)
            }
        }
    }
}; 
module.exports._init = _init