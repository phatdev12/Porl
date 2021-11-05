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
        this.login = () => { 
            init.login(data) 
        }
        this.log = () => { 
            init.log(data) 
        }
    }
}

module.exports.porlData = porlData