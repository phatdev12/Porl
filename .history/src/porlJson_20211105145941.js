const { _init} = require("./main/main");
const host = "PORL:>>"
const init = new _init()

class porlData{
    constructor(data = {}){
        try {
            this.setup(data)
        } catch (error) {
            return
        }       
    }

    login(args){ 
        if(!args.includes("PORL:>>")){
            console.log("Warning: Please the connect host db must have \"PORL:>>\"".yellow)
            init.login(host+args)
        }else{
            init.login(args)
        }
    }
    log(args){ 
        init.log(host+args) 
    }
}

module.exports.porlData = porlData