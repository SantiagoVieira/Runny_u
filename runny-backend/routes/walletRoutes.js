// walletRoutes.js
const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

// Rutas para la billetera
router.get('/balance/:userId', walletController.getBalance);
router.post('/add-funds/:userId', walletController.addFunds);
router.post('/pay/:userId', walletController.payWithWallet);

module.exports = router;
