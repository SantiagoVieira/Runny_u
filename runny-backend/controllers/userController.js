// userController.js
const User = require('../models/User');

// Obtener información de un usuario especifico
exports.getUserInfo = async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor.', error });
    }
};

// Actualizar la informacion del usuario
exports.updateUserInfo = async (req, res) => {
    const userId = req.params.userId;
    const updates = req.body;

    try {
        const user = await User.findByIdAndUpdate(userId, updates, { new: true });
        if (user) {
            res.status(200).json({ message: 'Informacion actualizada.', user });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor.', error });
    }
};
