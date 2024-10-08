// adminController.js
exports.updateStoreMenu = (req, res) => {
    const storeId = req.params.id;
    const { menu } = req.body; // Nuevos productos para el meny
    
    res.json({ message: 'Menu updated.', storeId });
};

exports.addStore = (req, res) => {
    const { name, description } = req.body; // Obtenemos la tienda del cuerpo de la solicitud
    const newStore = { id: stores.length + 1, name, description };
    stores.push(newStore);
    res.status(201).json(newStore);
};
