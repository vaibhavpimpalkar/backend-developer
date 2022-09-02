
let axios = require('axios')


let getMem = async function(req,res) {

   try {
    let options = {
        method : 'get',
        url : `https://api.imgflip.com/get_memes`
    }
    let result = await axios(options)
    let data = result.data
    res.status(200).send({msg : data})
}
catch (err) {
    res.status(500).send({ msg: err.message })
}
}

let Mems = async function (req,res) {

 try {  
    let id=req.query.template_id
    let Text0 = req.query.text0
    let Text1 = req.query.text1
    let userid = req.query.username
    let pass = req.query.password
    
    let options = {
        method : 'post',
        url : `https://api.imgflip.com/caption_image?template_id=${id}&text0=${Text0}&text1=${Text1}&username=${userid}&password=${pass}`
    }
    let result = await axios(options)
    let data = result.data
    res.status(200).send({msg : data})

}
catch (err) {
    res.status(500).send({ msg: err.message })
}
}

module.exports={getMem,Mems}