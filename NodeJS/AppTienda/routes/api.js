const router = require('express').Router();
const { checkToken } = require('./middlewares');

const apiProductosRouter = require('./api/productos');
const apiUsuariosRouter = require('./api/usuarios');

router.use('/productos', checkToken, apiProductosRouter);
router.use('/usuarios', apiUsuariosRouter);

module.exports = router;