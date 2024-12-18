// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurante: { type: String, required: true },
  Articulos: [{ Producto: { type: String }, Cantidad: { type: Number } }], 
  Monto: { type: Number, required: true },
  tarifaServicio: { type: Number, default: 500 }, 
  tarifaEnvio: { type: Number },                  
  Direccion: { type: String, required: true },
  id_repartidor: { type: mongoose.Schema.Types.ObjectId, ref: 'DeliveryPerson' },
  correo_universitario: { type: String, required: true },
  tipo_pedido: { type: String, required: true },
  Estado: { type: String, default: 'pendiente' }, 
  id_pedido: { type: Number, required: true },
});

module.exports = mongoose.model('Order', orderSchema, 'pedido');
