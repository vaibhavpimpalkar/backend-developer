const express = require('express');
// const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     logger.welcome()

//     res.send('My second ever api!')
// });

// problem 1
router.get('/movies',function(req,res){
    let movies=['mr.robot','valley','3 idiot','hero','pk']
    res.send(movies)
})

// problem 2 & 3 both are same
router.get('/movies/:indexNumber',function(req,res){
    let movies=['mr.robot','valley','3 idiot','hero','pk']
    let reqparam=req.params
    let i=reqparam.indexNumber
    if(i<movies.length){
        return res.send(movies[i])
    }
    else{
 return res.send('use valid index')
    }
})

// problem 4

router.get('/films',function (req,res) {
    const film=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       res.send(film)
       
})


// problem 5

router.get('/films/:filmId',function(req,res) {
    const film=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       const reqparam=req.params
       let i=reqparam.filmId
       if(i<film.length){
        return res.send(film[i])
       }
       else{
        return res.send('No movie exists with this id')
       }
})


module.exports = router;