const express = require('express');
const router = express.Router();

const createAuthor = require("../controllers/authorController")
const { createBook,getBook, populate, updateHardcover,updateprice } = require("../controllers/bookController")
const createpublisher = require('../controllers/PublisherController')
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//author
router.post("/createAuthor", createAuthor)



// publisher

router.post('/createpublisher', createpublisher)


// books
router.post('/createBook', createBook)
router.get('/getBook',getBook)
router.get('/populate', populate)

router.put('/updateHardcover', updateHardcover)

router.put('/updateprice',updateprice)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;