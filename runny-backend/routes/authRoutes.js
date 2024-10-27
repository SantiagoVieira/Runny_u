const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');
const { handleAuthUser, completeProfile } = require('../controllers/authController');

router.get('/login', (req, res) => {
  console.log('Redirect URI:', req.query.redirect_uri);
  res.oidc.login(); // Redirige a Microsoft para iniciar sesión
});

router.get('/callback', requiresAuth(), handleAuthUser); // Ruta protegida para autenticación y manejo de usuario

router.post('/completeProfile', completeProfile); // Ruta para completar el perfil después de iniciar sesión

router.get('/logout', (req, res) => {
  res.oidc.logout();
});

module.exports = router;
