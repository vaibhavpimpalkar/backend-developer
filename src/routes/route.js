const express = require('express');
const router = express.Router();
// const UserController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")

const bookModel= require("../models/bookModel")
const autherModel= require('../models/authorModel')


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/createBook',BookController.createBook)
router.get('/booklist',BookController.booklist)



router.post('/createAuthor',BookController.createAuthor)
router.get('/getAuthorData',BookController.getAuthorData)


router.get('/getAuthorbook',BookController.getAuthorbook)

router.get('/updatePrice',BookController.updatePrice)
// // router.get('/getAuthorbook',BookController.getAuthorbook)

router.get('/books',BookController.books)





// module.exports.createBook=createBook




// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

// //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = router;