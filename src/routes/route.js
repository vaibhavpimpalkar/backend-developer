const express = require('express');
const router = express.Router();

const Myorder= require("../controllers/OrderController")
const createProduct= require("../controllers/ProductController")
const purchaserMid = require ("../middlewares/myMiddlewares")
const  {createPurchaser,getPurchaser}=require('../controllers/PurchaserController')
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createPurchaser",purchaserMid, createPurchaser)
router.get("/getPurchaser", getPurchaser)
router.post("/createProduct", createProduct)
router.post("/createOrder", purchaserMid, Myorder)



module.exports = router;


