// supportRoutes.js

const express = require('express');
const router = express.Router();
const supportController = require('../controllers/supportController');

// Enviar una consulta de soporte
router.post('/queries', supportController.sendSupportQuery);

// Obtener todas las consultas
router.get('/queries', supportController.getAllQueries);

// Obtener una consulta específica
router.get('/queries/:id', supportController.getQueryById);

// Responder a una consulta
router.post('/queries/:id/response', supportController.respondToQuery);

module.exports = router;
