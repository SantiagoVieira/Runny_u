const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController'); 

// Definición de rutas para el carrito
router.post('/', cartController.addToCart); // Agregamos un item al carrito
router.get('/', cartController.getCart); // Obtenemos el contenido del carrito
router.put('/:id', cartController.updateCartItem); // Actualizamos un item en el carrito
router.delete('/:id', cartController.removeFromCart); // Eliminamos un item del carrito

module.exports = router;
