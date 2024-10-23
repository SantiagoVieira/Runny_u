// adminController.js
const Restaurant = require('../models/Restaurant');

// Metodo para agregar una nueva tienda
exports.addStore = async (req, res) => {
    const { Nombre_restaurante, Descuentos, Menu, Ubicacion } = req.body;

    try {
        const newStore = new Restaurant({ Nombre_restaurante, Descuentos, Menu, Ubicacion });
        await newStore.save();
        res.status(201).json(newStore);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar la tienda.', error });
    }
};

// Metodo para obtener todas las tiendas
exports.getStores = async (req, res) => {
    try {
        const stores = await Restaurant.find();
        res.status(200).json(stores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las tiendas.', error });
    }
};

// Metodo para eliminar una tienda
exports.deleteStore = async (req, res) => {
    const { id } = req.params;
    try {
        await Restaurant.findByIdAndDelete(id);
        res.status(200).json({ message: 'Tienda eliminada con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la tienda.', error });
    }};