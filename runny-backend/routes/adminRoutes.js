// adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Rutas para administrar tiendas
router.post('/addStore', adminController.addStore);
router.get('/getStores', adminController.getStores);
router.delete('/deleteStore/:id', adminController.deleteStore);

module.exports = router;
