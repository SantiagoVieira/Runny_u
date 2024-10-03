const mongoose = require('mongoose');

const deliveryPersonSchema = new mongoose.Schema({
  nombre_usuario: { type: String, required: true },
  correo_universitario: String,
  celular: String,
  billetera: Number,
  historial: String,
  calificacion_repartidor: [Number],
});

module.exports = mongoose.model('DeliveryPerson', deliveryPersonSchema, 'Repartidor');
