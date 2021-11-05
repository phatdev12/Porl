class porlData{
    constructor(data = {}){
        try {
            this.setup(data)
        } catch (error) {
            return
        }       
    }
    setup(data){
        const { _init} = require("./main/main");
        const host = "PORL:>>"
        const init = new _init()
        this.login = (args) => { 
            if(!args.includes("PORL:>>")){
                console.log("Warning: Please the connect host db must have \"PORL:>>?\"".yellow)
                init.login(host+args)
            }else{
                init.login(args)
            }
        }
        this.log = (args) => { 
            init.log(host+args) 
        }
    }
}

module.exports.porlData = porlData