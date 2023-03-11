const express = require('express');
const ctrlProducts = require('../controller/ctrlProducts');

const router = express.Router();

// Products routes 
router.get('/products', ctrlProducts.fetchProducts); // route to get all products
router.get('/products/:product_id', ctrlProducts.getProductById); // route to get product details
router.post('/products/:product_id', ctrlProducts.updateProduct); // route to update product stock by given id

router.get('/seed/products', ctrlProducts.mockProducts); // route to mock products

module.exports = router;