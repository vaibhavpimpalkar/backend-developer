const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: Number,

        required: true
    },
    emailId: String,
    password: String,
    isDeleted : {
        type:Boolean,
        default :false
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)
