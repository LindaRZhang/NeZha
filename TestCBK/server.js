//Hosted http://localhost:8443/Test.html, thats local server using express
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY
//hosting at http://localhost:3000/Test.html
const axios = require('axios')
const express = require('express')
const app = express()
const port = 8443	
app.use(express.json())
app.use(express.static('public'))

app.post('/weather',(req,res) => {
    const url = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/37.8267,-122.4233`
    axios({
        url: url,
        responseType: 'json'
    }).then(data => res.json(data.data.currently))
})

app.listen(port, ()=>{
    console.log(