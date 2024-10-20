const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

// Ruta para obtener el saldo de la billetera
router.get('/balance', walletController.getBalance);

// Ruta para añadir fondos a la billetera
router.post('/agregar fondos a villetera', walletController.addFunds);

module.exports = router;
