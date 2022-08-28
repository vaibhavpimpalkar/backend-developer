const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const OrderSchema = new mongoose.Schema({

    purchaserId: {
        type: ObjectId,
        ref: "Purchaser"
    },
    productId: {
        type: ObjectId,
        ref: "Product"
    },
    amount: Number,
    isFreeAppUser: Boolean,
    Date: String

}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema)