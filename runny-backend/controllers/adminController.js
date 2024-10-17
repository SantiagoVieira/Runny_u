// adminController.js
const stores = [
    { id: 1, name: 'Cafeteria Central', description: 'Cafeteria con variedad de cafes y pasteles.', menu: [] },
    { id: 2, name: 'Restaurante Universitario', description: 'Comida casera y saludable.', menu: [] },
];

// Metodo para actualizar el menu de una tienda
exports.updateStoreMenu = (req, res) => {
    const storeId = parseInt(req.params.id, 10);
    const { menu } = req.body; 

    const store = stores.find(store => store.id === storeId);
    if (store) {
        store.menu = menu;
        res.json({ message: 'Menu actualizado.', storeId });
    } else {
        res.status(404).json({ message: 'Tienda no encontrada.' });
    }
};

// metodo para añadir una nueva tienda
exports.addStore = (req, res) => {
    const { name, description } = req.body; //aqui ontenemos la tienda del cuerpo de la solicitud
    const newStore = { id: stores.length + 1, name, description, menu: [] };
    stores.push(newStore);
    res.status(201).json(newStore);
};

// metodo para añadir un producto al menu de una tienda
exports.addProductToMenu = (req, res) => {
    const storeId = parseInt(req.params.storeId, 10);
    const { id, name, price, description } = req.body;

    const store = stores.find(store => store.id === storeId);
    if (store) {
        store.menu.push({ id, name, price, description });
        res.status(201).json({ message: 'Producto añadido al menú.', store });
    } else {
        res.status(404).json({ message: 'Tienda no encontrada.' });
    }
};

// metodo para eliminar un producto del menu de una tienda
exports.removeProductFromMenu = (req, res) => {
    const storeId = parseInt(req.params.storeId, 10);
    const productId = parseInt(req.params.productId, 10);

    const store = stores.find(store => store.id === storeId);
    if (store) {
        store.menu = store.menu.filter(product => product.id !== productId);
        res.json({ message: 'Producto eliminado del menú.', store });
    } else {
        res.status(404).json({ message: 'Tienda no encontrada.' });
    }
};

//metodo para obtener una tienda específica por ID
exports.getStoreById = (id) => {
    return stores.find(store => store.id === id);
};
