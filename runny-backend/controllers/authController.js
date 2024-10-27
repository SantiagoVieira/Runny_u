const User = require('../models/User');

exports.handleAuthUser = async (req, res) => {
  const { email: Correo_universitario } = req.oidc.user; // Obtiene el correo del usuario autenticado

  try {
    let user = await User.findOne({ Correo_universitario });

    // Si el usuario ya existe, redirigir a la página principal
    if (user) {
      return res.redirect('http://localhost:5000/api/restaurants/getAll'); // Página principal
    }

    // Si el usuario no existe, redirigir a completar perfil
    res.redirect(`${process.env.BASE_URL}/completeProfile.html`);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error en el servidor');
  }
};

exports.completeProfile = async (req, res) => {
  const { Correo_universitario, Celular } = req.body;

  try {
    let user = await User.findOne({ Correo_universitario });

    // Crear usuario si no existe
    if (!user) {
      user = new User({
        Correo_universitario,
        Celular,
        Nombre_usuario: '',
        Billetera: 0,
        Historial: [],
        Calificacion_usuario: 0,
        carrito_usuario: null
      });
      await user.save();
    } else {
      // Actualizar número de celular si ya existe
      user.Celular = Celular; 
      await user.save();
    }

    // Redirigir a la página principal después de completar el perfil
    res.redirect('http://localhost:5000/api/restaurants/getAll');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error en el servidor');
  }
};
