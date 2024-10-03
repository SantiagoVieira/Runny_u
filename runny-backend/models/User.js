const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Nombre_usuario: { type: String, required: true },
  Correo_universitario: { type: String, required: true },
  Celular: String,
  Billetera: Number,
  Historial: String,
  Calificacion_usuario: Number,
  carrito_usuario: String,
});

module.exports = mongoose.model('User', userSchema, 'Usuario');
