const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');


// const userModel = require('../model/userModel.js')
// const userController = require('../controller/userController')



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://vaibhav_:DP5cPU2UQSOB14RT@cluster0.27uy03s.mongodb.net/?retryWrites=true&w=majority"
, {
   useNewUrlParser: true 
}
).then( () => {console.log( "MongoDb is connected")}  )
.catch( err => console.log(err))

// mongodb+srv://vaibhav:vaibhav%4028@cluster0.27uy03s.mongodb.net/vaibhav-DB?retryWrites=true&w=majority

// mongodb+srv://vaibhav:vaibhav@28@cluster0.27uy03s.mongodb.net/vaibhav@28?retryWrites=true&w=majority
app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

