const SupportQuery = require('../models/SupportQuery');

// Enviar una consulta de soporte
exports.sendSupportQuery = async (req, res) => {
    const { id_usuario, mensaje } = req.body; 

    // Validamos que id_usuario y mensaje exitan
    if (!id_usuario || !mensaje) {
        return res.status(400).json({ message: 'id_usuario y mensaje son obligatorios.' });
    }

    try {
        const newQuery = new SupportQuery({ id_usuario, mensaje });
        await newQuery.save();
        res.status(201).json({ message: 'Consulta enviada a soporte.', query: newQuery });
    } catch (error) {
        res.status(500).json({ message: 'Error al enviar la consulta a soporte.', error });
    }
};

// Obtener todas las consultas, con filtro opcional por estado
exports.getAllQueries = async (req, res) => {
    const { estado } = req.query; 

    try {
        const queryFilter = estado ? { estado } : {};
        const queries = await SupportQuery.find(queryFilter);
        res.status(200).json(queries);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las consultas.', error });
    }
};

// Obtener una consulta especifica por ID
exports.getQueryById = async (req, res) => {
    const queryId = req.params.id;

    try {
        const query = await SupportQuery.findById(queryId);
        if (query) {
            res.status(200).json(query);
        } else {
            res.status(404).json({ message: 'Consulta no encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la consulta.', error });
    }
};

// Responder a una consulta y actualizar su estado a 'resuelto'
exports.respondToQuery = async (req, res) => {
    const queryId = req.params.id;
    const { respuesta } = req.body;

    // Validar que la respuesta este presente
    if (!respuesta) {
        return res.status(400).json({ message: 'La respuesta es obligatoria.' });
    }

    try {
        const query = await SupportQuery.findById(queryId);
        if (query) {
            query.respuesta = respuesta;
            query.estado = 'resuelto'; 
            await query.save();
            res.status(200).json({ message: 'Respuesta enviada con exito.', query });
        } else {
            res.status(404).json({ message: 'Consulta no encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al responder a la consulta.', error });
    }
};
