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
app.use('/api/restaurants', require('./runny-backend/routes/RestaurantRoutes'));
app.use('/api/users', require('./runny-backend/routes/userRoutes'));
app.use('/api/orders', require('./runny-backend/routes/orderRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
