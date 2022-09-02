const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController")
const { weather, temprature, sortCities } = require('../controllers/whetherController')
const  {getMem,Mems}  = require('../controllers/memsController')


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)


router.get('/cowin/getList', CowinController.getList)

// ____________________________WEATHER AND SORT________________________________________//

router.get('/weather/london', weather)
router.get('/temprature/london', temprature)
router.get('/sortCities', sortCities)


// _____________________________M____E_____M_________S________________________________//

router.get('/getMem',getMem)
router.post('/Mems',Mems)











module.exports = router;