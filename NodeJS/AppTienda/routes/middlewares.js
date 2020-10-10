const jwt = require('jsonwebtoken');
const moment = require('moment');

const Usuario = require('../models/usuario');

const checkToken = async (req, res, next) => {

    // Comprobamos si el token está incluido
    if (!req.headers['authorization']) {
        return res.status(401).json({ error: 'La cabecera de Authorization es obligatoria' });
    }

    // Comprobamos si el token que incluye la cabecera es correcto
    const token = req.headers['authorization'];

    let obj = {};
    try {
        obj = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return res.status(401).json({ error: 'El token es incorrecto' });
    }

    // Comprobamos la expiración del Token
    const fechaActual = moment().unix();
    if (fechaActual > obj.fechaExpiracion) {
        return res.status(401).json({ error: 'El token está caducado' });
    }

    req.user = await Usuario.findById(obj.usuarioId);

    next();
};

module.exports = { checkToken };