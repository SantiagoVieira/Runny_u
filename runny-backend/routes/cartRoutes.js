// cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController'); 

//rutas para el carrito
router.post('/', cartController.addToCart); // Agregamos un item al carrito
router.get('/', cartController.getCart); // Obtenemos el contenido del carrito
router.put('/:id', cartController.updateCartItem); // Actualizamos un item en el carrito
router.delete('/:id', cartController.removeFromCart); // Eliminamos un item del carrito
router.post('/apply-promotion', cartController.applyPromotion); // Aplicar promocion al carrito

module.exports = router;
