function porlData(data){
    const { _init} = require("./main/main");
    const init = new _init()
    if (require.main === module) {
        init.log(data)
    }
}

module.exports.porlData = porlData