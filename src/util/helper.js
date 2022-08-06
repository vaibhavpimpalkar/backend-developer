const { get } = require("../routes/route");

function printDate(){
    const date=new Date()
    console.log(date);
}

module.exports.printDate=printDate

function printMonth(){
    const month=["jan","feb","mar","april","may","jun","jul","aug","sep","oct","nov","dec"]
    const a = new Date()
    let months = month[a.getMonth()]
    console.log(months);
}

module.exports.printMonth=printMonth

function getBatchInfo(){
    const xyz = ("plutonium, W3D3, the topic for today is Nodejs module system")
console.log(xyz);
}

module.exports.getBatchInfo=getBatchInfo