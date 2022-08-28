const ProductModel= require("../models/ProductModel")

const createProduct = async function (req,res){
    let data = req.body
    let product= await ProductModel.create(data)
    res.send({product})

}

module.exports = createProduct

