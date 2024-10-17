// cartController.js
let cart = []; 

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

exports.applyPromotion = (req, res) => {
    const { promotionId } = req.body;
    const promotion = promotions.find(promo => promo.id === promotionId);

    if (promotion) {
        
        if (promotion.type === 'buyOneGetOne') {
            cart.forEach(item => {
                item.quantity += 1; // Duplicar la cantidad de productos
            });
        } else if (promotion.discount) {
            cart.forEach(item => {
                item.price *= (1 - promotion.discount); // Aplicar descuento al precio
            });
        }

        res.json({ message: 'Promocion aplicada.', cart });
    } else {
        res.status(404).json({ message: 'Promoción no encontrada.' });
    }
};
