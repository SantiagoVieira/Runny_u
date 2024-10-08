const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.put('/stores/:id', adminController.updateStoreMenu);

module.exports = router;
