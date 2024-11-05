const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  fecha: { type: Date, default: Date.now },
  monto: Number,
  descripcion: String,
});

const userSchema = new mongoose.Schema({
  Nombre_usuario: { type: String, required: true },
  Correo_universitario: { type: String, required: true, unique: true },
  Celular: String,
  password: { type: String, required: true }, 
  Billetera: { type: Number, default: 0 },
  Historial: [transactionSchema], 
  Calificacion_usuario: { type: Number, default: 0 },
  carrito_usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' }
});

module.exports = mongoose.model('User', userSchema, 'Usuario');
