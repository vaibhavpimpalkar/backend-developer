


const purchaserModel = require("../models/purchaserModel2")
const orderModel = require("../models/OrderModel")
const productModel = require("../models/ProductModel")

const purchaserMid = function(req,res,next){
    if(!req.headers['isfreeappuser'])
        res.send({msg : "Header not found!"})
    
    else
        next()
    
}
module.exports=purchaserMid