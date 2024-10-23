// orderController.js
const Order = require('../models/Order');

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
        const orders = await Order.find({ Usuario: userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pedidos.', error });
    }
};
