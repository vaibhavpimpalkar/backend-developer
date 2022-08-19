// const { count } = require("console")
const bookModel = require('../models/bookModel')

const UserModel = require('../models/authorModel')

//BOOKS
const createBook = async function(req,res){
    let Book = req.body
    let savedBooks = await bookModel.create(Book)
    res.send({msg : savedBooks})
}

const booklist =async function(req,res){
    let allBook = await bookModel.find()
    res.send({msg : allBook})
}




const createAuthor = async function (req, res) {
    let Authordata = req.body
    // console.log(Authordata);
    let savedData = await UserModel.create(Authordata)
    res.send({ msg: savedData })
}

const getAuthorData = async function (req, res) {
    let allUsers = await UserModel.find()
    res.send({ msg: allUsers })
}

const getAuthorbook = async function (req, res) {
    let authorName = req.body
    let aid = await UserModel.findOne(authorName).select({ author_id: 1, _id: 0 })

    let list = await bookModel.find(aid)
    res.send({ msg: list })
}


const updatePrice = async function(req,res){
    let bookname = req.body
    let authorid = await bookModel.findOne(bookname).select({author_id : 1, _id : 0})

    let authorname = await UserModel.findOne(authorid).select({author_name: 1, _id : 0})

    let updateprice = await bookModel.findOneAndUpdate(
        {name  : "Two states"},
        {$set : {price : 100}},
        {new : true}
    )
    res.send({msg : updateprice, authorname})

}

const books = async function(req,res){
    let getbooks = await bookModel.find({price : {$gt : 50, $lte : 100}});
    let arr=getbooks.map(x=>x.author_id)
    let updatedreange=await authorschema.find({author_id:arr}).select({author_name:1, _id:0})
res.send( updatedreange)


 }

module.exports.createAuthor = createAuthor
module.exports.getAuthorData = getAuthorData
module.exports.getAuthorbook = getAuthorbook
module.exports.updatePrice=updatePrice
module.exports.books=books


module.exports.createBook=createBook
module.exports.booklist=booklist















// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }







