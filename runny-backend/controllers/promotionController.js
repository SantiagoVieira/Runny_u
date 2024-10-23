// promotionController.js
const Promotion = require('../models/Promotion');

// Metodo para agregar una nueva promocion
exports.addPromotion = async (req, res) => {
    const { nombre, descripcion, descuento, fecha_inicio, fecha_fin, id_restaurante } = req.body;

    // Validar que los campos sean obligatorios
    if (!nombre || !descuento || !fecha_inicio || !fecha_fin || !id_restaurante) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    try {
        // Creamos una nueva promoción
        const newPromotion = new Promotion({ nombre, descripcion, descuento, fecha_inicio, fecha_fin, id_restaurante });
        await newPromotion.save();
        res.status(201).json({ message: 'Promocion agregada con exito.', promotion: newPromotion });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar la promocion.', error });
    }
};

// Metodo para obtener todas las promociones
exports.getPromotions = async (req, res) => {
    try {
        // Obtenemos todas las promociones
        const promotions = await Promotion.find().populate('id_restaurante', 'Nombre_restaurante');
        res.status(200).json(promotions);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las promociones.', error });
    }
};

// Metodo para eliminar una promocion
exports.deletePromotion = async (req, res) => {
    const { id } = req.params;
    try {
        // Eliminar la promocion por su ID
        const result = await Promotion.findByIdAndDelete(id);
        if (result) {
            res.status(200).json({ message: 'Promocion eliminada con exito.' });
        } else {
            res.status(404).json({ message: 'Promocion no encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la promocion.', error });
    }
};
