const express = require('express');
const abc = require('../introduction/intro')
// const logger = require('../logger/logger')
// const helper = require('../util/helper')
const validator = require('../validator/formatter')
const router = express.Router();
const lodash=require('lodash')

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    // // logger.welcomepublic()


    // helper.printDate()
    // helper.printMonth()
    // helper.getBatchInfo() 


    
    // validator.trim()
    // validator.tolowerCase()
    // validator.toupperCase()


            const month=["jan","feb","mar","april","may","jun","jul","aug","sep","oct","nov","dec"]
           console.log(lodash.chunk(month,3))

           let odd=[1,3,5,7,9,11,13,15,17,19]
           let oddArr=lodash.tail(odd)
           console.log(oddArr);

           let Array=[[51,52,53],[1,3,5],[50,51,51],[1,2,3],[7,4,5,]]
           console.log(lodash.union(Array))
          

          const pairs=[["horror","The shining"],["drama","titanic"],["thriller","shutter island"],["fantacy","pans labryinth"]]
          console.log(lodash.fromPairs(pairs));


    res.send('My second ever api!')

});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason