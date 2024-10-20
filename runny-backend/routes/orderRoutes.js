const express = require('express');
const router = express.Router();
const {getHistoryByUser} = require('../controllers/orderController')

router.get('/history', getHistoryByUser);

module.exports = router;
