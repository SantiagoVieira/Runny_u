const mongoose = require('mongoose');

const supportQuerySchema = new mongoose.Schema({
  id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mensaje: { type: String, required: true },
  respuesta: { type: String, default: null },
  estado: { type: String, enum: ['pendiente', 'resuelto'], default: 'pendiente' },
  fecha_creacion: { type: Date, default: Date.now },
});

module.exports = mongoose.model('SupportQuery', supportQuerySchema, 'SupportQueries');
