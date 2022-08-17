const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({

    BookName: {
        type: String,
        require: true
    },


    authorName: String,
    tags: [String],

    year: {
        type: Number,
        default: 2021,
    },

    prices: {
        indianPrice: Number,
        europePrice: Number,
    },

    pagenumber: Number,
    stockAvailable: Boolean


}, { timestamps: true });


module.exports = mongoose.model('model', bookSchema)



