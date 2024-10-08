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
};
