// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Rutas para los pedidos
router.post('/createOrder', orderController.createOrder); 
router.post('/confirmOrder', orderController.confirmOrder);
router.get('/getOrders/:userId', orderController.getOrdersByUser);

module.exports = router;
