const express = require('express')
const app = express()
require('dotenv').config()
// const origin = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5000']
const origin = ['https://asm3-mon5.web.app', 'https://admin-r-asm3-mon5.vercel.app/', 'https://asm3-mon5.firebaseapp.com']
app.use((req, res, next) => {

    if (origin.includes(req.get('origin'))) {
        // res.setHeader('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Credentials', true) // work, somehow, to stop cors block
        res.setHeader('Access-Control-Allow-Headers', true)
        next()
        let aaaa = 0
        return
    }
})

const cors = require('cors');
app.use(cors({
    credentials: 'true',
    origin: origin
    // origin: ['https://asm3-mon5.web.app','https://asm3-mon5.firebaseapp.com']  // deploy
}));
app.use(express.json())
const cookie_parser = require('cookie-parser');
app.use(cookie_parser())

const session = require('express-session')
const mongodb_store = require('connect-mongodb-session')(session)
const store = new mongodb_store({
    uri: 'mongodb+srv://root:12acCm9hjMM@cluster0.4x27nex.mongodb.net/asm3'
    // , databases: 'asm3'
    , collection: 'session'
}, (error) => {
    if (error) throw  error
})
store.on('error', (error) => {
    if (error) throw  error
})

app.use(session({
    secret: 'some_text', resave: false,
    saveUninitialized: false, cookie: {maxAge: 1000 * 60 * 60 * 10},
    store: store
}))


// đặt controller dưới để các middleware đi qua trước
const controller = require('./controller/index');
app.use(controller)

app.listen(5000)