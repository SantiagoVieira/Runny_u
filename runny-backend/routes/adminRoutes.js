// adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Ruta para obtener una tienda específica por ID
router.get('/stores/:id', (req, res) => {
    const storeId = parseInt(req.params.id, 10); // Obtiene el ID de la tienda
    const store = adminController.getStoreById(storeId); // Llama al método para obtener la tienda

    if (store) {
        res.status(200).json(store);
    } else {
        res.status(404).json({ message: 'Tienda no encontrada.' });
    }
});

//rutas
router.put('/stores/:id', adminController.updateStoreMenu); //Aqui actualizamos el menu de una tienda
router.post('/stores', adminController.addStore); // Añadimos una nueva tienda
router.post('/stores/:storeId/menu', adminController.addProductToMenu); // Añadimos un produto al mene de la tienda
router.delete('/stores/:storeId/menu/:productId', adminController.removeProductFromMenu); // eliminadmos un producto

module.exports = router;
