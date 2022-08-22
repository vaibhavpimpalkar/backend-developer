const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const mongoose = require('mongoose')
const publisherModel = require('../models/publisherModel')
const { validate } = require("../models/authorModel")

// const isValid = mongoose.Types.ObjectId.isValid('ObjectId')


const createBook = async function (req, res) {
    let data = req.body
    if (!(data.author_id)) {
        return res.send({ msg: "author Must be present" })
    }
    if (!mongoose.Types.ObjectId.isValid(data.author_id)) {
        return res.send({ msg: " author id is not valid" })
    }

    let result = await authorModel.findOne({ author_id: data.author_id })
    if (!result) {
        return res.send({ msg: "Author is not present in author collection" })
    }


    if (!(data.publisher_id)) {
        return res.send({ msg: "publisher Must be present" })
    }
    if (!mongoose.Types.ObjectId.isValid(data.publisher_id)) {
        return res.send({ msg: " publisher id is not valid" })
    }

    let output = await publisherModel.find({ publisher_id: data.publisher_id })
    if (!output) {
        return res.send({ msg: "publisher is not present in publisher collection" })
    }
    let book = await bookModel.create(data)
    return res.send({ msg: book })
}

const getBook = async function (req,res){
    let book = await bookModel.find()
    res.send ({msg : book})
}

const populate = async function (req, res) {
    let book = await bookModel.find().populate(['author_id', 'publisher_id'])
    res.send({ msg: book })
}

const updateHardcover = async function (req, res) {
    let updatecover = await bookModel.updateMany(
        { $or: [{ publisher_id: "630250903de71f9fdf7294b8" }, { publisher_id: "630251883de71f9fdf7294ba" }] },
        { $set: { isHardCover: true } },
        { new: true }

    )

    res.send({ msg: updatecover })

}

const updateprice = async function(req,res){
    let authorRating = await authorModel.find({rating:{$gt:3.5}}).select("_id")
    let updatedprice= await bookModel.updateMany(
        {author_id:authorRating}, 
        {$inc: {price:+10}},
        ) 
    res.send({data : updatedprice})  
}



module.exports = { createBook,getBook, populate,updateHardcover,updateprice }


