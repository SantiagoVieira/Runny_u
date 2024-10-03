const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  Nombre_restaurante: { type: String, required: true },
  Descuentos: String,
  Menu: {
    Id_plato: Number,
    Nombre_plato: String,
    Precio: Number,
    Descripción: String
  },
  Ubicacion: String,
  calificacion_restaurante: [Number],
  pedidos_programados: Boolean,
});

module.exports = mongoose.model('Restaurant', restaurantSchema, 'Restaurante');
