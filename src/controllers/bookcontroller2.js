

const Bookmodel2 = require("../models/Bookmodel2")
const bookmodel2 = require("../models/Bookmodel2")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await bookmodel2.create(data)
    res.send({ msg: savedData })
}

const Booklist = async function (req, res) {
    let allBook = await bookmodel2.find().select({ BookName: 1, authorName: 1 })
    res.send({ msg: allBook })
}

const getBooksInYear = async function (req, res) {
    // let year = await Bookmodel2.find({year : {$eq :year}})
    let year = req.body.year
     let inyear = await Bookmodel2.find({ year: year })
    res.send({ msg: inyear })
}

const getParticularBook = async function (req, res) {
    let input = req.body
    let book = await bookmodel2.find(input)  //{ $or: [{ stockAvailable: true, }, { pagenumber: { $gt: 500 } }] })
    res.send({ msg: book })
}

const getXINRBooks = async function (req,res){
    // let inrprice = req.body
    let price = await bookmodel2.find({"prices.indianPrice": {$in: ["100", "200","500"]}} ) //.select({bookName:1,_id:0})
res.send({msg : price})
}

const getRandomBooks = async function (req,res){
    let randombook = await bookmodel2.find({$or:[ {stockAvailable: true},{ totalPages: {$gt: 500}}]})
    res.send({msg : randombook})
}
module.exports.createBook = createBook
module.exports.Booklist = Booklist
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBook = getParticularBook
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks




