const express = require('express')
const app = express()

app.get('/',(req,res)=>{

    res.send('hello world')
})
app.get('/id/:id',(req,res)=>{
    console.log(req.params)
    res.send(req.params.id)
})
app.get('/ha',(req,res)=>{
    res.send('ha')
})


app.listen(5000)