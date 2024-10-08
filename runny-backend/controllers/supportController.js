// supportController.js
exports.sendSupportQuery = (req, res) => {
    const { query } = req.body; // Consulta del usuario
    // Lógica para manejar la consulta de soporte
    res.json({ message: 'Consulta enviada a soporte.', query });
};
