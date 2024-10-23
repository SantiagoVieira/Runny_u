// storeRoutes.js
const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// Rutas para las tiendas
router.get('/getAll', storeController.getAllStores);
router.get('/menu/:storeId', storeController.getMenu);
router.get('/promotions/:storeId', storeController.getPromotions);

module.exports = router;
