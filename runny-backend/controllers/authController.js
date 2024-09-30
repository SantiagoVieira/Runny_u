const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
  const { Nombre_usuario, Correo_universitario, Celular, Billetera } = req.body;

  try {
    let user = await User.findOne({ Correo_universitario });
    if (user) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    user = new User({
      Nombre_usuario,
      Correo_universitario,
      Celular,
      Billetera,
      Historial: '',
      Calificacion_usuario: 0,
      carrito_usuario: ''
    });

    await user.save();
    res.status(201).json({ msg: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error en el servidor');
  }
};

exports.loginUser = async (req, res) => {
  const { Correo_universitario } = req.body;

  try {
    let user = await User.findOne({ Correo_universitario });
    if (!user) {
      return res.status(400).json({ msg: 'Usuario no encontrado' });
    }

    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error en el servidor');
  }
};
