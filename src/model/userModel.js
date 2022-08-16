const { default: mongoose } = require('mongoose');


const bookSchema = new mongoose.Schema({

    BookName : String,
    AutherName : String,
    categary : String,
    Year : Number
    
},{timestamps : true})


module.exports = mongoose.model('user',bookSchema)

