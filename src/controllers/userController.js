const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
  let data = req.body;
  let savedData = await userModel.create(data);
 res.status(201).send({ msg: savedData });
  }
  catch(err){res.status(500).send({msg : "Error : ",Error :err.message})}
};



////login user
const loginUser = async function (req, res) {
  try {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(403).send({
      status: false,
      msg: "username or the password is not corerct",
    });


  let token = jwt.sign(
    {
      
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FunctionUp",
    },
    "functionup-plutonium-very-very-secret-key"
  );
  res.setHeader("x-auth-token", token);
  res.status(201).send({ status: true, token: token });
  }
  catch(err){res.status(500).send({msg : "Error : ",Error :err.message})}
};

//////////get user data

const getUserData = async function (req, res) {
  try {
  let userId = req.params.userId
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
   return res.status(403).send({msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
  // Note: Try to see what happens if we change the secret while decoding the token
}
catch(err){res.status(500).send({msg : "Error : ",Error :err.message})}
}

const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(403).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(201).send({ status: updatedUser, data: updatedUser });
}
catch(err){res.status(500).send({msg : "Error : ",Error :err.message})}
}
/////////////delete user
const deleteUser = async function(req, res) {   
try{
  let userId = req.params.userId
  let user = await userModel.findById(userId)
  if(!user) {
      return res.send({status: false, message: "no such user exists"})
  }
  let updatedUser = await userModel.findOneAndUpdate({_id: userId},{$set : {isDeleted: true}}, {new: true})
  res.status(201).send({status: true, data: updatedUser})
}
catch(err){res.status(500).send({msg : "Error : ",Error :err.message})}
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser=deleteUser
