const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');
const { handleAuthUser } = require('../controllers/authController');

// Ruta para iniciar sesión
router.post('/login', loginUser); // Llama al método loginUser en el controlador

// Ruta protegida que maneja la autenticación y guarda en la base de datos
router.get('/callback', requiresAuth(), handleAuthUser);

// Ruta para cerrar sesión
router.get('/logout', (req, res) => {
  res.oidc.logout(); // Redirige al usuario para cerrar sesión
});

module.exports = router;
