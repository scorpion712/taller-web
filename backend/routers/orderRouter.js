const express = require('express');
const ctrlOrder = require('../controller/ctrlOrders');

const router = express.Router();

// Order routes
router.get('/orders/:email', ctrlOrder.getOrderByEmail); // get orders history from given client email
router.post('/orders', ctrlOrder.createOrder); // create a new order
router.get('/orders', ctrlOrder.fetchOrders);
 
module.exports = router;