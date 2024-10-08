// cartController.js
let cart = []; // Almacenamos los productos del carrito

exports.addToCart = (req, res) => {
    const { id, name, price, description } = req.body; 
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1; 
    } else {
        cart.push({ id, name, price, description, quantity: 1 });
    }

    res.status(201).json({ message: 'Item añadido al carrito', cart });
};

exports.getCart = (req, res) => {
    res.status(200).json(cart); 
};

exports.updateCartItem = (req, res) => {
    const { id } = req.params; 
    const { quantity } = req.body;

    const item = cart.find(item => item.id == id); 

    if (item) {
        item.quantity = quantity;
        res.status(200).json({ message: 'Cantidad de Item actualizada', cart });
    } else {
        res.status(404).json({ message: 'Item no encontrado en el carrito' });
    }
};

exports.removeFromCart = (req, res) => {
    const { id } = req.params;

    cart = cart.filter(item => item.id != id); 

    res.status(200).json({ message: 'Item eliminado del carrito', cart });
};
