<<<<<<< HEAD
const Order = require('../models/Order');

exports.getHistoryByUser = async (req, res) => {
  try {
    const orders = await Order.find({ id_usuario: req.user.id }).sort({ _id: -1 });

    // Saca la info de cada pedido 
    res.status(200).json({
      success: true,
      data: orders.map(order => ({
        id_pedido: order.id_pedido,
        restaurante: order.restaurante,
        articulos: order.Articulos, 
        monto: order.Monto,
        direccion: order.Direccion,
        tipo_pedido: order.tipo_pedido,
      }))
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error buscando el historial de compras' });
  }
=======
// orderController.js
let orderHistory = [];

exports.createOrder = (req, res) => {
    const { items, storeId } = req.body; 
    const orderId = `order-${Date.now()}`; 
    orderHistory.push({ orderId, items, storeId });
    res.status(201).json({ message: 'orden dreada exitosamente', orderId });
};

exports.getOrderStatus = (req, res) => {
    const orderId = req.params.orderId;
    res.status(200).json({ orderId, status: 'en preparacion' });
};

exports.getOrderHistory = (req, res) => {
    res.status(200).json(orderHistory);
};

exports.selectDeliveryOption = (req, res) => {
    const { option } = req.body; 
    res.json({ message: `Opcion de entrega seleccionada: ${option}` });
};

exports.setDeliveryLocation = (req, res) => {
    const { location } = req.body; 
    res.json({ message: 'Ubicación de entrega establecida.', location });
>>>>>>> c031fc2b4f9229f53424ff045a4ea174bd7d2847
};
