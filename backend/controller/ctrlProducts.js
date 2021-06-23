const Product = require('../models/productModel');
const mongoose = require('mongoose');

// fetch products by given query. If there is not query, get all products 
module.exports.fetchProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.send(product);
    } catch (error) { 
        res.status(404).send({message: 'Product Not Found. ' + error.message});
    }
}

// get product by given id
module.exports.getProductById = async (req, res) => {
    try {
        const product_id = req.params.product_id; 
        const product = await Product.findById(product_id);  
        res.send(product);
    } catch (error) { 
        res.status(404).send({message: 'Product Not Found. ' + error.message});
    }
}

// save a new product
module.exports.createProduct = async (req, res) => {
    try {  
        const newProduct = await new Product(req.body);
        const product = await newProduct.save(); 
        res.send(product);
    } catch (error) {
        res.status(404).send({message: 'Product not created.'+ error.message});
    }
     /*
    console.log("req body", req.body);
    Product.create(req.body, (err, product) => {
        err ? res.status(404).send({message: error}) : res.send(product);    
    });
    */
}

// delete a product by given id
module.exports.deleteProduct = async (req, res) => {
    try { 
        const deleted = await Product.findOneAndDelete({_id: req.params.product_id});
        res.send(deleted);
    } catch (error) {
        res.status(404).send({message: 'Product id not found. ' + error.message});
    }
}

// update product by given id
module.exports.updateProduct = async (req, res) => {
    try {
        const updated = await Product.updateOne({_id: req.params.product_id}, req.body); // body contains the updated prouct
        res.send(updated);
    } catch (error) {
        res.status(404).send({message: 'Can not update product. Error: ' + error.message});
    }
}