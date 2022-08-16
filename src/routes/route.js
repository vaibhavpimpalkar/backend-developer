const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();


const userController = require('../controller/userController')
const userModel = require('../model/userModel')



router.post('/createBooks', userController.createBooks)

router.get('/getBooks', userController.getBooks)




module.exports = router;
// adding this comment for no reason