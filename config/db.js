const mongoose = require('mongoose');

const connectDB = async () => {
  console.log("Mongo URI:", process.env.MONGO_URI);

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Atlas conectado');
  } catch (error) {
    console.error('Error al conectar a MongoDB Atlas:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
