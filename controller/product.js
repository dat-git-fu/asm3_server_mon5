const express = require('express')
const product = express()
const {Product_schema} = require('../data/mongo')
const mongoose = require('mongoose')
const {query} = require("express");
const uri_mongo = process.env.uri
product.get('/products/pagination/:query',async (req,res)=>{
    await mongoose.connect(uri_mongo)
    const query = req.params.query
    const text_arr = query.split('&')
    const text_arr_new = text_arr.map(el=>el.split('='))
    const query_obj = {}
    text_arr_new.forEach(el=>query_obj[el[0]] =el[1] )
    console.log(query_obj)

            // { $or: [ {long_desc: {$regex: query_obj.search}} , {short_desc:{$regex:query_obj.search}}]
    if(query_obj.category==='all') {
        const array =await Product_schema.find().limit(query_obj.count)
        res.send(array)
        return
    }
    // hình như đề ko đòi làm đoạn này
    const array =await Product_schema.find({category:query_obj.category}).limit(query_obj.count)
    // const array =await Product_schema.find().limit(9)
    res.send(array)
    return
})
product.post('/products',async (req,res)=>{
    await mongoose.connect(uri_mongo)
    const prod = new Product_schema({
        name:req.body.name,
        category:req.body.category,
        img1:req.body.img1,
        img2:req.body.img2,
        img3:req.body.img3,
        img4:req.body.img4,
        short_desc:req.body.short_desc,
        longDesc:req.body.longDesc,
        price:req.body.price
    })
    await  prod.save()
    console.log(req.body)
    res.json('save')
})

product.get('/products',async (req,res)=>{
    await mongoose.connect(uri_mongo)
    const array =await Product_schema.find({remaining:{$gt:0}})
    res.send(array)
})
product.get('/products/:id',async (req,res)=>{
    await mongoose.connect(uri_mongo)
    const id = req.params.id
    const product =await Product_schema.findById(id)
    res.send(product)
})
// product.get('/products/:query',async (req,res)=>{
//     await mongoose.connecfind({$or:[{name}]})
//     const query = req.params.query
//     const array =await Product_schema.find({$or:[{name:{$regex:query}},{long_desc:{$regex:query}} ,{short_desc:{$regex:query}} ] })
//     res.send(array)
// })

module.exports = product