// app.js

require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Conectar a MongoDB Atlas
connectDB();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/auth', require('./runny-backend/routes/authRoutes'));
app.use('/api/restaurants', require('./runny-backend/routes/restaurantRoutes'));
app.use('/api/users', require('./runny-backend/routes/userRoutes'));
app.use('/api/orders', require('./runny-backend/routes/orderRoutes'));

// Rutas para administración 
app.use('/api/admin', require('./runny-backend/routes/adminRoutes'));
app.use('/api/stores', require('./runny-backend/routes/storeRoutes'));
app.use('/api/support', require('./runny-backend/routes/supportRoutes'));
app.use('/api/cart', require('./runny-backend/routes/cartRoutes'));
app.use('/api/wallet', require('./runny-backend/routes/walletRoutes'));

// Rutas para promociones
app.use('/api/promotions', require('./runny-backend/routes/promotionRoutes'));

// Puerto de escucha
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
