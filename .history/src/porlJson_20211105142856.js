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
        const init = new _init()
        this.login = (args) => { 
            init.login(args) 
        }
        this.log = (args) => { 
            init.log(args) 
        }
    }
}

module.exports.porlData = porlData