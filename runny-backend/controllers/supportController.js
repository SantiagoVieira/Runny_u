// supportController.js

let queries = []; // Almacenaremos las consultas que tenga soporte
let queryIdCounter = 1; 

// Enviar una consulta de soporte
exports.sendSupportQuery = (req, res) => {
    const { userId, query } = req.body; // Obtenemos el ID del usuario y la consulta
    const newQuery = { id: queryIdCounter++, userId, query, response: null };
    queries.push(newQuery);
    res.status(201).json({ message: 'Consulta enviada a soporte.', query: newQuery });
};

// Obtener todas las consultas
exports.getAllQueries = (req, res) => {
    res.status(200).json(queries);
};

// Obtener una consulta específica
exports.getQueryById = (req, res) => {
    const queryId = parseInt(req.params.id, 10);
    const query = queries.find(q => q.id === queryId);
    if (query) {
        res.status(200).json(query);
    } else {
        res.status(404).json({ message: 'Consulta no encontrada.' });
    }
};

// Responder a una consulta
exports.respondToQuery = (req, res) => {
    const queryId = parseInt(req.params.id, 10);
    const { response } = req.body;

    const query = queries.find(q => q.id === queryId);
    if (query) {
        query.response = response;
        res.status(200).json({ message: 'Respuesta enviada con exito.', query });
    } else {
        res.status(404).json({ message: 'Consulta no encontrada.' });
    }
};
