const User = require('../models/User');

exports.loginUser = async (req, res) => {
  const { Correo_universitario } = req.body;

  try {
    let user = await User.findOne({ Correo_universitario });

    // Si el usuario ya existe, redirigir a la página principal
    if (user) {
      return res.redirect(process.env.BASE_URL); // Redirige a la página principal
    }

    // Si el usuario no existe, redirigir a la página de completar perfil
    res.redirect(`${process.env.BASE_URL}/completeProfile.html`); // Redirige a completar perfil
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error en el servidor');
  }
};

exports.completeProfile = async (req, res) => {
  const { Correo_universitario, Celular } = req.body;

  try {
    let user = await User.findOne({ Correo_universitario });
    
    // Si el usuario no existe, crearlo
    if (!user) {
      user = new User({
        Correo_universitario,
        Celular,
        Nombre_usuario: '',
        Billetera: 0,
        Historial: '',
        Calificacion_usuario: 0,
        carrito_usuario: ''
      });
      await user.save();
    } else {
      // Si el usuario ya existe, solo actualiza el número de celular
      user.Celular = Celular; 
      await user.save();
    }

    // Redirigir a la página principal después de completar el perfil
    res.redirect(process.env.BASE_URL); // Redirige a la página principal
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error en el servidor');
  }
};