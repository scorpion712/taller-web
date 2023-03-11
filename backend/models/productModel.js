const mongoose = require('mongoose'); 

// Product Model
const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    rating: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [ String ] 
});

module.exports = mongoose.model('Product', productSchema);