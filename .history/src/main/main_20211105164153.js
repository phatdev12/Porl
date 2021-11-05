/**
 * The package have been created by Tu Thang Phat
 * All right ready in 2021
 * Copyright by Tu Thang Phat
 */

const fs = require('fs'); // require fs
const colors = require('colors'); // require colors

class _init{
    /**
     * Use init to import init module to porlJson
        @param {_init} 
        @private
    */
    constructor(args){
        try {
            this.login(args)
            this.log(args)
        } catch (error) {
            return
        }       
    }
    login(args){
        /**
         * The login static is read a .porl file to  make a JSON file
         * @param {login}
         * @property {args}
         * @private
         */
        let file = args.split("PORL:>>").join("")
        if(!file.includes(".porl")){
            console.log("Warning:".yellow + " File Not Found".yellow);
            console.log("The program can only read the file \"*.porl\", please try again.");
            return
        }
        if(!file) return file = "./error.err"; 
        fs.readFile('./' + file, 'utf-8', function(option, data){ 
            if(file === "./error.err") return console.log(data); 
            if(file){ 
                const dataStr = "<" + "data" + ">"; // dataStr is a type of data
                const read = data.split(`data: ${dataStr}>> : `).join('\n'); 
                const readComplete = read.split("string: ").join("\n").replace(/[^a-zA-Z:"{}, ]/g, "") // readComplete is a complete value of file [.porl]
                if (data.includes(dataStr)); 
                    /**
                     * Setup something after read file
                     * If the string have no ">>" return ... >> [ERROR] log
                     * @param {data}
                     * @param {read}
                     * @param {jsonFile}
                     * Return the program
                     */
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
                    /**
                     * Create a loading function
                     * Why ??: I like it :D
                     * @property {CreateLoading}
                     * @param {Loading}
                     * After loading >> return the function
                     */
                    const P = ["⢿", "⣻", "⣽", "⣾", "⣷", "⣯", "⣟", "⡿"];
                    const S = ['...', '..', '.'];
                    let x = 0;  // A number to choose Array Value
                    let y = 0; // A number to choose Array Value
                    const loader = setInterval(() => {
                        process.stdout.write(`\r${P[x++]} Loading${S[y++]} `);
                        y %= S.length;
                        x %= P.length;
                    }, 100);

                    setTimeout(() => {
                        clearInterval(loader);
                        console.clear()
                        setTimeout(() => {
                            write() // Here is return a function Where it ?: line 56
                        }, 800)
                    }, 5000); // SetTime to delay the function and start loading
            }
        })

    }
    log(args){
        /**
         * The log static is read a .porl and log it in command line
         * This function will read values and use console.log
         * return value
         * @param {log}
         * @property {args}
         * @private
         * @todo console.log >> value of file[.porl]
         */
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
module.exports._init = _init // Export class to import other file