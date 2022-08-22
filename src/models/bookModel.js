const mongoose = require('mongoose');
const ID = mongoose.Schema.Types.ObjectId
// const publisherId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    name: String,
    author_id: {
        type: ID,
        ref: "NewAuthor",

    },
    price: Number,
    rating: Number,
    publisher_id: {
        type: ID,
        ref: "NewPublisher",
        required: true
    },
    isHardCover: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)
