const router = require('express').Router();
const Usuario = require('../../models/usuario')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const { create } = require('../../models/usuario');

router.post('/registro', async (req, res) => {

    req.body.password = bcrypt.hashSync(req.body.password);

    const nuevoUsuario = await Usuario.create(req.body);

    // MANDAR MAIL -> nodeMailer

    res.json({
        success: 'Usuario creado con éxito',
        usuario: nuevoUsuario
    })
});

router.post('/login', async (req, res) => {
    const usuario = await Usuario.findOne({ email: req.body.email });

    if (!usuario) {
        return res.status(401).json({ error: 'Error en email y/o clave1' });
    }

    const iguales = bcrypt.compareSync(req.body.password, usuario.password);
    if (!iguales) {
        return res.status(401).json({ error: 'Error en email y/o clave2' });
    }

    res.json({
        success: 'Login correcto',
        token: createToken(usuario)
    });
});

function createToken(usuario) {
    const obj = {
        usuarioId: usuario._id,
        fechaCreacion: moment().unix(),
        fechaExpiracion: moment().add(10, 'minutes').unix()
    }
    console.log(obj);
    return jwt.sign(obj, process.env.SECRET_KEY);
}

module.exports = router;