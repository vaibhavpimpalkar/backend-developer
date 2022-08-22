const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let data = req.body
    let author = await AuthorModel.create(data)
    res.send({data: author})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

module.exports=createAuthor