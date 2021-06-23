/*
    Taller de Desarrollo Web
    Fac. Cs. Exactas, UNICEN. Tandil
    2021

    @author: Diez, Lautaro
*/ 
const mongoose = require('mongoose');  
const Product = require('./productModel').schema;

// Order schema
const orderSchema = new mongoose.Schema({
    date: Date,
    products: [ Product ],
    client_name: String,
    client_surname: String,
    client_email: String,
    total: Number,
});
 
module.exports = mongoose.model('Order', orderSchema);