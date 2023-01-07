const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:12acCm9hjMM@cluster0.4x27nex.mongodb.net/asm3')
const Product_schema = new mongoose.Schema({
    name: String,
    category:String,
    img1:String,
    img2:String,
    img3:String,
    img4:String,
    long_desc:String,
    price:Number,
    short_desc:String,
    remaining:Number
});
module.exports = {Product_schema: mongoose.model('Products', Product_schema)}
