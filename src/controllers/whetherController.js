let axios = require("axios")
const { model } = require("mongoose")


// _________________________________________weather______________________________________

let weather = async function (req, res) {
    try {
        let city = req.query.q
        let key = req.query.appid
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ msg: data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

// ___________________________________Temp________________________________________________________

let temprature = async function (req, res) {

    try {
        let key = req.query.appid
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`
        }
        let result = await axios(options)
        let data = result.data.main.temp
        res.status(201).send({ msg: data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

// ____________________________________________Sorted cities________________________________________________________//

let sortCities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let newcities = []
        for (i = 0; i < cities.length; i++) {
            let order = { city: cities[i] }


            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=2961d86af5bd3e8c5e77a670e1dd9830`
            }
            let result = await axios(options)
            order.temp = result.data.main.temp
           
            newcities.push(order.temp)
        }
        let sort = newcities.sort((x, y) => { return y.temp - x.temp })
        res.status(200).send({ msg: sort })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}







module.exports = { weather, temprature, sortCities }