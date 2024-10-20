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
};
