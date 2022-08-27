const express = require('express');
const router = express.Router();

const { createUser, getUsersData, basicCode, abc } = require("../controllers/userController")
const createBook = require("../controllers/bookController")
const { mid1, mid2, mid3, mid4 } = require("../middlewares/commonMiddlewares")




router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", createBook)

router.post("/createUser", createUser  );

router.get("/basicRoute", mid1, mid2, mid3, mid4, basicCode)

module.exports = router;