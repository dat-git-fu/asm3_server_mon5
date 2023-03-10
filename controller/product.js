const express = require('express')
const product = express()
const {Product_schema, User_schema} = require('../data/mongo')
const mongoose = require('mongoose')
// const {query} = require("express");
//const uri_mongo = process.env.uri
const uri_mongo = 'mongodb+srv://root:12acCm9hjMM@cluster0.4x27nex.mongodb.net/asm3'
product.get('/products/pagination/:query', async (req, res) => {

    const query = req.params.query
    const text_arr = query.split('&')
    const text_arr_new = text_arr.map(el => el.split('='))
    const query_obj = {}
    text_arr_new.forEach(el => query_obj[el[0]] = el[1])
    console.log(query_obj)

    // { $or: [ {long_desc: {$regex: query_obj.search}} , {short_desc:{$regex:query_obj.search}}]
    if (query_obj.category === 'all') {
        const array = await Product_schema.find().limit(query_obj.count)
        res.send(array)
        return
    }
    // hình như đề ko đòi làm đoạn này
    const array = await Product_schema.find({category: query_obj.category}).limit(query_obj.count)
    // const array =await Product_schema.find().limit(9)
    res.send(array)
    return
})
product.post('/products', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");


    const prod = new Product_schema({
        name: req.body.name,
        category: req.body.category,
        img1: req.body.img1,
        img2: req.body.img2,
        img3: req.body.img3,
        img4: req.body.img4,
        short_desc: req.body.short_desc,
        longDesc: req.body.longDesc,
        price: req.body.price,
        remaining: req.body.remaining
    })
    await prod.save()
    console.log(req.body)
    res.json('save')
})

product.get('/products', async (req, res) => {
    console.log(req.session)

    const array = await Product_schema.find({remaining: {$gt: 0}})
    res.send(array)
})
product.get('/products/:id', async (req, res) => {

    const id = req.params.id
    const product = await Product_schema.findById(id)
    res.send(product)
})

//TODO admin route

product.get('/admin/products', async (req, res) => {

    if (req.session.role === 'admin') {
        const array = await Product_schema.find()
        res.send(array)
        return
    }
    if (req.session.role!=='admin'){
        res.send(null)
        return
    }
    let aaaa = 0
})

product.post('/admin/signin', async (req, res) => {
    const user = await User_schema.findOne({email: req.body.email})
    if (user === null) {
        res.send('Not Admin')
        return
    }
    const admin = user.toObject()

    if (req.body.password === admin.password) {
        req.session.role = 'admin'
        res.send({admin: true})
    } else {
        res.send({admin: false})
    }
    let aaaa = 0
})

module.exports = product