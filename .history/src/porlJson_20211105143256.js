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
        const host = "PORL:>>?"
        const init = new _init()
        this.login = (args) => { 
            init.login(host+args) 
        }
        this.log = (args) => { 
            init.log(host+args) 
        }
    }
}

module.exports.porlData = porlData