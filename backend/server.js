/*
    Taller de Desarrollo Web
    Fac. Cs. Exactas, UNICEN. Tandil
    2021

    @author: Diez, Lautaro

    API Server
*/
const mongoose = require('mongoose'); 
const express = require("express");   
var cors = require("cors");
const productRouter = require('./routers/productRouter');
const orderRouter = require('./routers/orderRouter');
const config = require('./config');

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    // use this to fix all deprecation warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).catch((error) => console.log("error", error.message));

const app = express(); 
app.use(cors());
// adding middleware to recognize the incoming Request Object as a JSON Object
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// adding API routes and controller
app.use('/api', productRouter);
app.use('/api', orderRouter);

app.listen(config.PORT, ()=> {
    console.log("Server started at http://localhost:" + config.PORT);
});