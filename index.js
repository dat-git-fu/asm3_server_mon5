const express = require('express')
const app = express()

app.get('/',(req,res)=>{

    res.send('hello world')
})
app.get('/id/:id',(req,res)=>{
    console.log(req.params)
    res.send(req.params.id)
})

app.listen(5000)