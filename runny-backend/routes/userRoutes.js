// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rutas para la información del usuario
router.get('/getUserInfo/:userId', userController.getUserInfo);
router.put('/updateUserInfo/:userId', userController.updateUserInfo);

module.exports = router;
