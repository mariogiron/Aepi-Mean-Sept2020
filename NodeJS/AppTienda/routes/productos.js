const router = require('express').Router();
const Producto = require('../models/producto');

// GET /productos - Recupera todos los productos
router.get('/', (req, res) => {
    Producto.find()
        .then(productos => {
            res.render('productos/index', { productos });
        })
        .catch(error => console.log(error));
});

// GET /productos/departamento/NOMBREDPTO - Recupera todos los productos de un departamento
router.get('/departamento/:departamento', async (req, res) => {
    const productos = await Producto.find({ departamento: req.params.departamento });
    res.render('productos/index', { productos });
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
router.post('/create', async (req, res) => {
    try {
        console.log(req.body);
        const nuevoProducto = await Producto.create(req.body);
        res.redirect('/productos');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;