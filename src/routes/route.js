const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController");
const userModel = require('../models/userModel');

const bookController2 = require ("../controllers/bookcontroller2")
// const bookmodel2 = require('../models/Bookmodel2')

const bookmodel2 = require("../models/Bookmodel2")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook",bookController2.createBook)

router.get("/Booklist",bookController2.Booklist)

router.get('/getBooksInYear',bookController2.getBooksInYear)

router.get('/getParticularBook',bookController2.getParticularBook)

router.get('/getXINRBooks',bookController2.getXINRBooks)

router.get('/getRandomBooks',bookController2.getRandomBooks)



module.exports = router;