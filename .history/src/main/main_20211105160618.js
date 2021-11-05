const fs = require('fs'); 
const colors = require('colors'); 

class _init{
    constructor(args){
        try {
            this.login(args)
            this.log(args)
        } catch (error) {
            return
        }       
    }
    login(args){
        let file = args.split("PORL:>>").join("")
        if(!file.includes(".porl")){
            console.log("Warning:".yellow + " File Not Found".yellow);
            console.log("The program can only read the file \"*.porl\", please try again.");
            return
        }
        if(!file) return file = "./error.err"; 
        fs.readFile("./" + file, 'utf-8', function(option, data){ 
            if(file === "./error.err") return console.log(data); 
            if(file){ 
                const dataStr = "<" + "data" + ">"; 
                const read = data.split(`data: ${dataStr}>> : `).join('\n'); 
                const readComplete = read.split("string: ").join("\n").replace(/[^a-zA-Z:"{}, ]/g, "")
                if (data.includes(dataStr)); 
                    if(!data.includes(dataStr + ">>")) return console.log("Error DataStr: The data string must have \">>\".".red); 
                    if(!read.includes("string")) return console.log("Error String: The data must have \"string:\" to start a database".red);
                    const dataJson = JSON.stringify(JSON.parse(readComplete))
                    const write = () => {
                        fs.writeFile('data.porl.json', dataJson, 'utf8', (err) => {
                            if (err) {
                                console.log(`Error writing file: ${err}`);
                            } else {
                                process.stdout.write("Successful!!")
                            }
                        });
                    }   
                    const P = ["⢿", "⣻", "⣽", "⣾", "⣷", "⣯", "⣟", "⡿"];
                    const S = ['...', '..', '.'];
                    let x = 0;
                    let y = 0;
                    const loader = setInterval(() => {
                        process.stdout.write(`\r${P[x++]} Loading${S[y++]} `);
                        y %= S.length;
                        x %= P.length;
                    }, 10);

                    setTimeout(() => {
                        clearInterval(loader);
                        console.clear()
                        setTimeout(() => {
                            write()
                        }, 800)
                    }, 5000);
            }
        })

    }
    log(args){
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
}; 
module.exports._init = _init