const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number

}, { timestamps: true });

module.exports = mongoose.model('anyUser', userSchema);
