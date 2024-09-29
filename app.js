const mongoose = require('mongoose');

//Url de MongoDB Atlas
const uri = 'mongodb+srv://MiguelHerazo7:Holi123@holy.vs25l.mongodb.net/?retryWrites=true&w=majority&appName=Holy';

// Conectar a MongoDB Atlas
mongoose.connect(uri)
  .then(() => {
    console.log('Conectado a MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB Atlas:', err);
  });

  //Ejecutar node app.js 
  //Tener nodejs instalado