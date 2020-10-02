const router = require('express').Router();

router.get('/:productoId', (req, res) => {
    console.log(req.params.productoId);
    res.send('Dentro del detalle del producto');
});

router.post('/create', (req, res) => {
    res.send('Estoy en la función create');
});

module.exports = router;