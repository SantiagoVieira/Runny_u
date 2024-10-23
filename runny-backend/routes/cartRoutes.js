// cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Rutas para el carrito
router.post('/addItem', cartController.addItemToCart);
router.get('/getCart/:userId', cartController.getCart);

module.exports = router;
