// walletController.js
let walletBalance = 50.0; // Ejemplo de saldo inicial

// Obtener el saldo de la billetera
exports.getBalance = (req, res) => {
    res.status(200).json({ balance: walletBalance });
};

// Añadir fondos a la billetera
exports.addFunds = (req, res) => {
    const { amount } = req.body;

    if (amount > 0) { // Validar que el monto sea positivo
        walletBalance += amount; // Añadir fondos
        res.status(200).json({ message: `Agregado ${amount} a la billetera`, newBalance: walletBalance });
    } else {
        res.status(400).json({ message: 'Cantidad no válida. Por favor ingrese un valor positivo.' });
    }
};
