// const UserModel = require("../models/authorModel")
// const bookModel = require("../models/bookModel")

// const createAuthor = async function (req, res) {
//     let Authordata = req.body
//     // console.log(Authordata);
//     let savedData = await UserModel.create(Authordata)
//     res.send({ msg: savedData })
// }

// const getAuthorData = async function (req, res) {
//     let allUsers = await UserModel.find()
//     res.send({ msg: allUsers })
// }

// const getAuthorbook = async function (req, res) {
//     let author = req.body
//     let id = await UserModel.find({ author_id: 1 })    //.select({ author_id: 1 })

//     // from finding from book
//     let bookauthor = await bookModel.find(id)
//     res.send({ msg: bookauthor })

// }

// // const

// module.exports.createAuthor = createAuthor
// module.exports.getAuthorData = getAuthorData
// module.exports.getAuthorbook = getAuthorbook