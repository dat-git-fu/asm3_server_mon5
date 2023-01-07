const express = require('express')
const controller = express()
const product = require('./product')
controller.use(product)
controller.get('/',(req,res)=>{
    res.send('hello controller')
})


module.exports = controller