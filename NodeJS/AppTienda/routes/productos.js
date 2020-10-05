const router = require('express').Router();

// GET /productos - Recupera todos los productos
router.get('/', (req, res) => {
    res.render('productos/index');
});

// GET /productos/new - Formulario con los datos para crear el producto
router.get('/new', (req, res) => {
    res.render('productos/new');
});

// GET /productos/IDPRODUCTO - Recupera un único producto
router.get('/:productoId', (req, res) => {
    res.render('productos/detail')
});

// POST /productos/create - Genera un nuevo producto
router.post('/create', (req, res) => {
    console.log(req.body);
    res.redirect('/productos');
});

module.exports = router;