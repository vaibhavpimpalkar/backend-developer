const express = require('express')
const router = express.Router()
const userController= require("../Controller/userController")
const bookController= require("../Controller/bookController")
const reviewController= require("../Controller/reviewController")
const mid = require("../middlewares/auth.js")
const aws = require('aws-sdk')


router.post("/write-file-aws",bookController.awsLink)



router.post("/register", userController.createUser)
router.post("/logIn", userController.logIn)

router.post("/books",mid.authentication, bookController.createBook)
router.get("/books",mid.authentication, bookController.getBooks)
router.get("/books/:bookId",mid.authentication, mid.authorisation, bookController.getBookById)
router.put("/books/:bookId",mid.authentication, mid.authorisation, bookController.updateBook)
router.delete("/books/:bookId",mid.authentication, mid.authorisation, bookController.deleteBook)

router.post("/books/:bookId/review", reviewController.createReview)
router.put("/books/:bookId/review/:reviewId", reviewController.updateReview)
router.delete("/books/:bookId/review/:reviewId", reviewController.deleteReview)

module.exports = router