const mongoose = require('mongoose'); 

// Product Model
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    color: [ String ],
    image: String,
    categories: [ String ] 
});

module.exports = mongoose.model('Product', productSchema);