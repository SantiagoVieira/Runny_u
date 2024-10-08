const express = require('express');
const router = express.Router();
const supportController = require('../controllers/supportController');

router.post('/query', supportController.sendSupportQuery);

module.exports = router;
