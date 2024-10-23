// restaurantController.js
const Restaurant = require('../models/Restaurant');

// Obtener todos los restaurantes
exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los restaurantes.', error });
    }
};
