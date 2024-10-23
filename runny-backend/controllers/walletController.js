// walletController.js
const User = require('../models/User');
const Order = require('../models/Order');

// Obtener el saldo de la billetera
exports.getBalance = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }
        res.status(200).json({ balance: user.Billetera });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el saldo.', error });
    }
};

// Añadir fondos a la billetera
exports.addFunds = async (req, res) => {
    const { userId } = req.params;
    const { amount } = req.body;

    if (amount > 0) {
        try {
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado.' });
            }
            user.Billetera += amount;
            user.Historial.push({ monto: amount, descripcion: 'Fondos añadidos' });
            await user.save();
            res.status(200).json({ message: `Agregado ${amount} a la billetera`, newBalance: user.Billetera });
        } catch (error) {
            res.status(500).json({ message: 'Error al añadir fondos.', error });
        }
    } else {
        res.status(400).json({ message: 'Cantidad no válida. Por favor ingrese un valor positivo.' });
    }
};

// Realizar un pago utilizando la billetera
exports.payWithWallet = async (req, res) => {
    const { userId } = req.params;
    const { orderId, amount } = req.body;

    try {
        const user = await User.findById(userId);
        const order = await Order.findById(orderId);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }
        if (!order) {
            return res.status(404).json({ message: 'Orden no encontrada.' });
        }
        if (user.Billetera < amount) {
            return res.status(400).json({ message: 'Fondos insuficientes.' });
        }

        user.Billetera -= amount;
        user.Historial.push({ monto: -amount, descripcion: `Pago de orden ${orderId}` });
        await user.save();

        order.estado = 'pagado';
        await order.save();

        res.status(200).json({ message: 'Pago realizado con exito.', newBalance: user.Billetera });
    } catch (error) {
        res.status(500).json({ message: 'Error al realizar el pago.', error });
    }
};
