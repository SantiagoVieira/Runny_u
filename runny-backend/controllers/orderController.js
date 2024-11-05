// controllers/orderController.js
const Order = require('../models/Order');

// calculamos la tarifa de acuerdo a que hroa es
const calcularTarifaEnvio = () => {
  const horaActual = new Date().getHours();
  if (horaActual >= 5 && horaActual < 11) return 2000;
  if (horaActual >= 12 && horaActual < 14) return 2500;
  if (horaActual >= 14 && horaActual < 20) return 2000;
  return 0; 
};

// creamos  un nuevo pedido
exports.createOrder = async (req, res) => {
  const { id_usuario, restaurante, Articulos, Monto, Direccion, correo_universitario, tipo_pedido, id_pedido } = req.body;

  try {
    const tarifaEnvio = calcularTarifaEnvio();
    const tarifaServicio = 500;
    const montoTotal = Monto + tarifaServicio + tarifaEnvio;

    const nuevoPedido = new Order({
      id_usuario,
      restaurante,
      Articulos,
      Monto: montoTotal,
      tarifaServicio,
      tarifaEnvio,
      Direccion,
      correo_universitario,
      tipo_pedido,
      Estado: 'pendiente',
      id_pedido
    });

    await nuevoPedido.save();
    res.status(201).json({ message: 'Pedido creado exitosamente.', pedido: nuevoPedido });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el pedido.', error });
  }
};

// Confirmar un pedido
exports.confirmOrder = async (req, res) => {
  const { orderId } = req.body;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Pedido no encontrado.' });
    }

    order.Estado = 'confirmado';
    await order.save();
    res.status(200).json({ message: 'Pedido confirmado.', order });
  } catch (error) {
    res.status(500).json({ message: 'Error al confirmar el pedido.', error });
  }
};

// Obtener todos los pedidos de un usuario
exports.getOrdersByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ id_usuario: userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los pedidos.', error });
  }
};
