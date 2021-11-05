const { porlData } = require('../src/index');

const data = new porlData()
const client = data.login("PORL:>>main.porl")
console.log(client.option.make.value)