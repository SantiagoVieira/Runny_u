const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Registro de usuario
exports.registerUser = async (req, res) => {
  const { Nombre_usuario, Correo_universitario, Celular, password } = req.body;

  try {
    // Verificar si el usuario ya existe
    let user = await User.findOne({ Correo_universitario });
    if (user) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    user = new User({
      Nombre_usuario,
      Correo_universitario,
      Celular,
      Billetera: 0,
      Historial: [],
      Calificacion_usuario: 0,
      carrito_usuario: null
    });

    // Encriptar la contraseña antes de guardarla
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Guardar el nuevo usuario en la base de datos
    await user.save();
    res.status(201).json({ msg: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error en el servidor');
  }
};

// Inicio de sesión de usuario
exports.loginUser = async (req, res) => {
  const { Correo_universitario, password } = req.body;

  try {
    // Verificar si el usuario existe
    let user = await User.findOne({ Correo_universitario });
    if (!user) {
      return res.status(400).json({ msg: 'Usuario no encontrado' });
    }

    // Comparar la contraseña ingresada con la encriptada en la base de datos
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Contraseña incorrecta' });
    }

    res.json({ msg: 'Inicio de sesión exitoso', user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error en el servidor');
  }
};
