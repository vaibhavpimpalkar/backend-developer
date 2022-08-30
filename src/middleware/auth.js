const jwt = require("jsonwebtoken");
const route = require("../routes/route");
const userModel = require("../models/userModel");

///Authentication

const Authenticate = async function (req, res, next) {

    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    if (!token) return res.send({ status: false, msg: "Token is Compulsory" });

     let user = req.params.userId

    let newUser = await userModel.findById(user)
    if (!newUser) return res.send({ status: false, msg: "Invalid User Enter Valid User " });

    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken) return res.send({ status: false, msg: "Token is invalid" });

    else {
        req.decodedToken = decodedToken
     
        next()

    }
}

////Authorazition

let Authorise = async function (req, res, next) {

    newToken = req.decodedToken  ///acesses the vaule token by its key i. e req.decoded token

    /// it will take acesses from Authenticate middleware

    let newModifiedUser = req.params.userId
    let loginedinUser = newToken.userId  //stroing the data of newtoken into loginedinuser i.e user id

    if (newModifiedUser != loginedinUser) return res.send({status:false,msg:"Acesses Deny You don't have Authority for Acesses "});

    else{
        next()
    }
}
module.exports.Authenticate=Authenticate
module.exports.Authorise=Authorise