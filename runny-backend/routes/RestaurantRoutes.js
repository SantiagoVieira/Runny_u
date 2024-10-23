// restaurantRoutes.js
const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Ruta para obtener todos los restaurantes
router.get('/getAll', restaurantController.getAllRestaurants);

module.exports = router;
