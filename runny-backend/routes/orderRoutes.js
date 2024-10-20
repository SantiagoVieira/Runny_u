const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const {getHistoryByUser} = require('../controllers/orderController')

router.get('/history', getHistoryByUser);
=======
const orderController = require('../controllers/orderController');

router.post('/', orderController.createOrder); // Creamos la orden
router.get('/:orderId', orderController.getOrderStatus); // Obtenenemos el estado de orden
router.get('/history', orderController.getOrderHistory); // Obtenemos el historial de las ordenes
router.post('/delivery-option', orderController.selectDeliveryOption); // Seleccionamos uba opcinn de entrega
router.post('/delivery-location', orderController.setDeliveryLocation); // Establecemos la ubicacion de la entrega
>>>>>>> c031fc2b4f9229f53424ff045a4ea174bd7d2847

module.exports = router;
