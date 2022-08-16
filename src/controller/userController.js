
const userModel = require('../model/userModel.js')


const createBooks = async function (req, res) {
    let data = req.body
    let savedBooks = await userModel.create(data)
    res.send({ msg: savedBooks })
}



const getBooks = async function (req, res) {
    let allBooks = await userModel.find()
    res.send({ msg: allBooks })
}


module.exports.createBooks = createBooks
module.exports.getBooks = getBooks