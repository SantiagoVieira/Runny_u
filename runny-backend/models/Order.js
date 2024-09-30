const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurante: String,
  Articulos: String,
  Monto: Number,
  Direccion: String,
  id_repartidor: { type: mongoose.Schema.Types.ObjectId, ref: 'DeliveryPerson' },
  correo_universitario: String,
  tipo_pedido: String,
  id_pedido: Number,
});

module.exports = mongoose.model('Order', orderSchema);
