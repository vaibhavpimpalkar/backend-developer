const PurcheserModel = require('../models/purchaserModel2')
const ProductModel = require('../models/ProductModel')
const OrderModel = require('../models/OrderModel')
const purchaserModel2 = require('../models/purchaserModel2')

const Myorder = async function (req, res) {
    const data = req.body
    const myheader = req.header.isFreeAppUser
    data.isFreeAppUser=req.header.isFreeAppUser
    const userid = data.purchaserId
    const productid = data.productId
    const validuser = await purchaserModel2.findById(userid)
    const validproduct = await ProductModel.findById(productid)

// res.send({order : data})

    if (!validuser || !validproduct) {
        res.send({ Err: "Invalid Id"})
    }

    res.send({data})

    const createOrder = await OrderModel.create(data)
    if(myheader == "true"){
   
        const update = await OrderModel.updateOne(
            {_id : createOrder._id},
            {$set : {amount : 0}},
            {new : true}
        )
        res.send({msg : createOrder})
    }
    else if(myheader=="false"){
        const ProductPrice = validproduct.price
        if(validuser.balance>=data.amount){
            await PurcheserModel.updateOne({_id:validuser},{$inc :{balance: - ProductPrice}},{$set:{isFreeAppUser : myheader}})
            await OrderModel.updateOne({_id :createOrder,_id},{$set:{amount:ProductPrice}},{new:true})
res.send({msh:createOrder})
        }
        else {res.send({msg : "balance is low "})}
    }
}

module.exports = Myorder