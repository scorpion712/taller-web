const Product = require('../models/productModel');
const fs = require('fs')

// fetch products  
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
// update product by given id
module.exports.updateProduct = async (req, res) => {
    try {
        const updated = await Product.updateOne({_id: req.params.product_id}, req.body); // body contains the updated prouct
        res.send(updated);
    } catch (error) {
        res.status(404).send({message: 'Can not update product. Error: ' + error.message});
    }
}

// mock existing products
module.exports.mockProducts = async (req, res) => {
    try {  
        const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
        const existsProducts = await Product.find({}) != {};
        if (!existsProducts) {
            const products = await Product.insertMany(data.products); 
            res.send(products);
        } else {
            res.send([]);
        }
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