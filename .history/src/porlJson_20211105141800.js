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
        if (typeof require !== 'undefined') {
            init.login(data)
        }
    }
}

module.exports.porlData = porlData