const publisherModel = require('../models/publisherModel')



const createpublisher = async function (req,res){
    const data = req.body
    const publisher = await publisherModel.create(data)
    res.send ({msg : publisher})
}


module.exports = createpublisher