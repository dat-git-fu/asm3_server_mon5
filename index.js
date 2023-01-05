const express = require('express')
const app = express()

app.get('/',(req,res)=>{

    res.send('hello world')
})
app.get('/:id',(req,res)=>{

    res.send('id')
})

app.listen(5000)