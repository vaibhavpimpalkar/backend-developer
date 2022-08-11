const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/sol1',function (req,res) {
    let array=[1,2,3,5,6,7,8,9]    // 4 is missing
    let total=((array.length+1)*(array.length+2))/2   // n*n+2/2
    for(let i=0;i<array.length;i++)
    total=total-array[i]
    console.log(total)
    return res.send(  { data: total  }  );
    })





    router.get("/sol2", function (req, res) {
        let  arr1=[33, 34, 35, 37, 38]    //36 is missing
         let n=arr1.length+1
         let total=[n*(arr1[0]+arr1[arr1.length-1])/2]// n*n+2/2
         let sum=0
         for(let i=0;i<arr1.length;i++){
             sum = sum+arr1[i]
         }
         let missingNumber=total-sum 
         
         return res.send(  { data: missingNumber  }  );
     });






module.exports = router;
// adding this comment for no reason

