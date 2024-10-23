// cartController.js
const Order = require('../models/Order');

// Agregar un producto al carrito
exports.addItemToCart = async (req, res) => {
    const { userId, producto, cantidad } = req.body;

    try {
        let order = await Order.findOne({ Usuario: userId, Estado: 'pendiente' });

        if (!order) {
            order = new Order({ Usuario: userId, Productos: [], Estado: 'pendiente' });
        }

        order.Productos.push({ Producto: producto, Cantidad: cantidad });
        await order.save();
        res.status(200).json({ message: 'Producto agregado al carrito.', order });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el producto al carrito.', error });
    }
};

// Obtener el carrito de un usuario
exports.getCart = async (req, res) => {
    const { userId } = req.params;

    try {
        const order = await Order.findOne({ Usuario: userId, Estado: 'pendiente' });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el carrito.', error });
    }
};
