// promotiontRoutes.js

const express = require('express');
const router = express.Router();
const promotionController = require('../controllers/promotionController');

// Rutas para gestionar promociones
router.post('/add', promotionController.addPromotion); 
router.get('/', promotionController.getPromotions); 
router.delete('/:id', promotionController.deletePromotion); 

module.exports = router;
