const express = require('express');
const app = express()
require('dotenv').config()
const port = process.env.PORT
const sequelize = require('./utils/db')
const bodyParser = require('body-parser')
const Auth_routes = require('./routes/Auth_routes')


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(Auth_routes)

sequelize.sync().then((result)=>{
    app.listen(port, ()=>{
        console.log(`server run this port: ${port}`)
    })
}).catch((err)=>{
    console.log(err)
})
