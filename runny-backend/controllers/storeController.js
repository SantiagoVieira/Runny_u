// Simulación de tiendas y sus descripciones
const stores = [
  { id: 1, name: 'Cafetería Central', description: 'Cafetería con variedad de cafés y pasteles.' },
  { id: 2, name: 'Restaurante Universitario', description: 'Comida casera y saludable.' },
];

// Simulación de menús para cada tienda
const menus = {
  1: [
      { id: 1, name: 'Café', price: 2.5, description: 'Café caliente.' },
      { id: 2, name: 'Pastel', price: 3.0, description: 'Pastel de chocolate.' },
  ],
  2: [
      { id: 3, name: 'Ensalada', price: 5.0, description: 'Ensalada fresca.' },
      { id: 4, name: 'Sopa', price: 4.0, description: 'Sopa del día.' },
  ],
};

// Simulación de promociones para las tiendas
const promotions = [
  { id: 1, storeId: 1, description: '20% de descuento en todas las bebidas.' },
  { id: 2, storeId: 2, description: 'Compra uno y lleva otro gratis en cualquier plato principal.' },
];

// Obtener todas las tiendas
exports.getStores = (req, res) => {
  res.status(200).json(stores);
};

// Obtener el menú de una tienda específica
exports.getMenu = (req, res) => {
  const storeId = req.params.storeId;
  const menu = menus[storeId];
  if (menu) {
      res.status(200).json(menu);
  } else {
      res.status(404).json({ message: 'Menu no encontrado.' });
  }
};

// Obtener promociones de una tienda específica
exports.getPromotions = (req, res) => {
  const storeId = parseInt(req.params.storeId, 10);
  const storePromotions = promotions.filter(promotion => promotion.storeId === storeId);
  if (storePromotions.length > 0) {
      res.status(200).json(storePromotions);
  } else {
      res.status(404).json({ message: 'No se encontraron promociones para la tienda indicada..' });
  }
};
