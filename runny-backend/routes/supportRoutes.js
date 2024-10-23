// supportRoutes.js
const express = require('express');
const router = express.Router();
const supportController = require('../controllers/supportController');

// Rutas para consultas de soporte
router.post('/sendQuery', supportController.sendSupportQuery);
router.get('/getAllQueries', supportController.getAllQueries);
router.get('/getQuery/:id', supportController.getQueryById);
router.put('/respondQuery/:id', supportController.respondToQuery);

module.exports = router;
