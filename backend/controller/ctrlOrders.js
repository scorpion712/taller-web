const Order = require('../models/orderModel');

// fetch order by given email or send error message
module.exports.getOrderByEmail = async (req, res) => {
    try {
        const order = await Order.find({client_email: req.params.email});
        res.send(order);
    } catch (error) {
        res.status(404).send({message: 'Order not found. Error: ' + error.message});
    }
};

// create a new order and save it
module.exports.createOrder = async (req, res) => {
    Order.create(req.body, (err, order) => {
        err ? res.status(404).send({message: err}) : res.send(order);    
    });
};

// get all orders 
module.exports.fetchOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        res.send(orders);
    } catch (error) {
        res.status(404).send({message: 'Order Not Found. Error: ' + error.message});
    }
}