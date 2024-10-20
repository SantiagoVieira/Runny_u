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

exports.getOrderHistory = async (req, res) => { 
  try {
    // Busca las órdenes del usuarion orndenado de mas reciente primero
    const orders = await Order.find({ id_usuario: req.user.id }).sort({ _id: -1 });

    // Si no encuentra saca esto
    if (orders.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No se encontraron órdenes para este usuario'
      });
    }

    // Devuelve la info de los pedido
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
    res.status(500).json({ message: 'Error buscando el historial de compras', error });
  }
};


exports.selectDeliveryOption = (req, res) => {
    const { option } = req.body; 
    res.json({ message: `Opcion de entrega seleccionada: ${option}` });
};

exports.setDeliveryLocation = (req, res) => {
    const { location } = req.body; 
    res.json({ message: 'Ubicación de entrega establecida.', location });

};
