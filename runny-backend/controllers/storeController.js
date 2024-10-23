// storeController.js
const Restaurant = require('../models/Restaurant');

// Obtener todas las tiendas (restaurantes)
exports.getAllStores = async (req, res) => {
    try {
        const stores = await Restaurant.find();
        res.status(200).json(stores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las tiendas.', error });
    }
};

// Obtener el menu de una tienda específica
exports.getMenu = async (req, res) => {
    const storeId = req.params.storeId;

    try {
        const store = await Restaurant.findById(storeId);
        if (store) {
            res.status(200).json(store.Menu);
        } else {
            res.status(404).json({ message: 'Tienda no encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor.', error });
    }
};

// Obtener promociones de una tienda especifica
exports.getPromotions = async (req, res) => {
    const storeId = req.params.storeId;

    try {
        const store = await Restaurant.findById(storeId);
        if (store && store.Descuentos) {
            res.status(200).json(store.Descuentos);
        } else {
            res.status(404).json({ message: 'No se encontraron promociones para la tienda indicada.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor.', error });
    }
};
