const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/', storeController.getStores);
router.get('/:storeId/menu', storeController.getMenu);
router.get('/:storeId/promotions', storeController.getPromotions);

module.exports = router;
