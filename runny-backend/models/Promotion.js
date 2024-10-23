const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  descuento: { type: Number, required: true },
  fecha_inicio: { type: Date, required: true },
  fecha_fin: { type: Date, required: true },
  id_restaurante: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurante', required: true }, 
});

module.exports = mongoose.model('Promotion', promotionSchema, 'Promociones');
